
## Start APP in development mode
```sh
yarn dev
```

## Prepare project for deploy
1) Run this command before each commit. it will re-format code and list lint errors and fix it before commit.

```sh
yarn fixPrebuild
```

2) Run this command to only beautify code
```sh
yarn fixStyle
```

3) Run this command to fix list lint
```sh
yarn fixLint
```

4) Run Storybook on port 3030
```sh
yarn storybook
```

5) Build Storybook before commit and push
```sh
yarn storybook:build
```

6) Getting unknown error in Storybook tun this command and re start storybook
```sh
yarn fixStorybook
```

--------------------------------
## Production mode

```sh
yarn build
yarn start
```

## Component Separation 
--------------------------------
1) UI-Kit level component should be in this directory.
```sh
src/components/base/
```

2) A component communicate with API or take API data as input and give output that should be in this directory.
```sh
src/components/functional/
```

3) A component which is part of top level layout like header, footer, sidebar, auth page, section etc...
```sh
src/components/layout/
```