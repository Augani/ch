import React, { FunctionComponent, useRef, createRef } from 'react';
import { ITextFieldProps, ISelectFieldProps, ISelectOptions } from './type';
import { TextFieldStyled, SelectFieldStyled, ListStyled } from './styles';
import Danger from './icons/danger.svg';
import ChevronUp from './icons/chevronUp.svg';
import ChevronDown from './icons/chevronDown.svg';

export const TextField: FunctionComponent<ITextFieldProps> = props => {
  const { label, inputSize, error, errorText, className, ...rest } = props;
  const newClassName = className || '';
  return (
    <TextFieldStyled label={label} inputSize={inputSize}>
      <label>{label}</label>
      <input
        className={`${error ? newClassName + ' error' : className}`}
        {...rest}
      />
      {error ? (
        <div className='error-field'>
          <Danger />
          <small>{errorText}</small>
        </div>
      ) : null}
    </TextFieldStyled>
  );
};

export const SelectField: FunctionComponent<ISelectFieldProps> = props => {
  const {
    label,
    options,
    iconLeft,
    iconsRight,
    defaultSelect,
    onValueChanged,
    ...rest
  } = props;
  const select = defaultSelect || options[0];
  const [userSelected, setUserSelected] = React.useState(select);
  const [active, setActive] = React.useState(false);
  const SelectField = useRef() as React.MutableRefObject<HTMLDivElement>;

  React.useEffect(() => {
    onValueChanged(userSelected);
  }, [userSelected]);

  const looseFocus = () => {
    setActive(false);
  };

  const activated = () => {
    setActive(!active);
  };

  React.useEffect(() =>
    window.addEventListener('click', ev => {
      if (!SelectField.current) return;
      if (!SelectField.current.contains(ev.target as Node)) {
        setActive(false);
      }
    })
  );

  const selectOption = (value: ISelectOptions) => {
    setUserSelected(value);
    looseFocus();
  };

  return (
    <SelectFieldStyled active={active} ref={SelectField}>
      <label>{label}</label>
      <div
        {...rest}
        onClick={activated}
        tabIndex={active ? -1 : 0}
        className='field'
      >
        <div className='inner'>
          {iconLeft ? <img src={userSelected.icon} /> : null}
          <p>{userSelected.label}</p>
          {iconsRight ? <img src={userSelected.icon} /> : null}
        </div>
        <ChevronDown />
        <ListStyled tabIndex={active ? 0 : -1} active={active}>
          <ul>
            {options &&
              options.map((value: ISelectOptions, index: number) => (
                <>
                  <li
                    tabIndex={-1}
                    onClick={() => selectOption(value)}
                    key={index}
                  >
                    {iconLeft ? <img src={value.icon} /> : null}
                    <p>{value.label}</p>
                    {iconsRight ? <img src={value.icon} /> : null}
                  </li>
                  <hr />
                </>
              ))}
          </ul>
        </ListStyled>
      </div>
    </SelectFieldStyled>
  );
};
