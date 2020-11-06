# Getting started

To use typescript we need to install it. Ts-node allows us to compile ts file js file and execute it at the same time.

```bash
npm install -g typescript ts-node
```

1. To compile typescript file to javascript file run tsc plus the name of your file:

```bash
tsc my-ts-file.ts
```

or

```bash
ts-node my-ts-file.ts
```

## Definition types

When we install modules with npm often they come without typescript definitions, because it is not necessary to use them with typescript. In that cases we will get warning, that typescript doesnt know how to work with them.

And usually for most of the modules we can install additional package containing type definitions. For example _faker_ is javascript module for creating fake data. If we install it, we also have to install type definition file and in general they look like **@types/my-js-installed-module** in the package.json. For faker it would look like _@types/faker_.

After installing this kind of file typescript is aware of what that module contains. By clicking on the imported module while holding ctrl key we can get straight to the type definition file in case we want to check for something.

Type definition files usually are named like _index.d.ts_

## TS config

To manually generate ts config file run in the terminal:

```bash
tsc --init
```

And we will get _tsconfig.json_ file. Then by running just **tsc** we will get result based on the configuration.

### Interface

It is used to describe the shape of an object. For example the properties it is going to have and the type of the values.
