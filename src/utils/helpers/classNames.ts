/**
 * ----------------------------------
 * Example of use className function
 * ----------------------------------
 * const className = classNames({
 *      ['link']: true,
 *      ['active-link']: isCurrentUrl?? false,
 *      ['disable']: false,
 *  });
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const classNames = (classes: object): string =>
  Object.entries(classes)
    .filter(c => c[1])
    .map(c => c[0])
    .join(' ');
