# General

## Searching in folders

With **ctrl+shift+f** you can search in the whole directory opened with VS code.

## Chrome specific feature
If we have the console drawer open, which shows the console in every tab in the dev tool, from the three dots icon we can activate the **Coverage** tab.

On there we can see how much of the code was used when running the page. This is usefull in case we want to do some optimizations.

## Animations package

**react-addons-css-transition-group** - is a nice package for animating react elements, for example when rendering a list or removing items 1 by 1.

## Another animation package

If we are using some animations where we have control with React over displaying and hiding them, we might experience issues, because on hiding for example React will not wait for the animation to finish. As a solution we can use the following package.

```bash
npm install react-transition-group --save
```

## Scoped styles

For scoped styles checkout css modules for React.
