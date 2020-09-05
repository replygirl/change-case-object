# change-case-object

Recursively change the case of an object's keys

## Installation

```bash
yarn add change-case-object
```

## Usage

- [Functions](#functions)
- [`CasedObject` class](#casedobject-class)

### Functions

```js
import { /* function */ } from 'change-case-object'
```

- [`camelCase`](#camelcase)
- [`capitalCase`](#capitalcase)
- [`constantCase`](#constantcase)
- [`dotCase`](#dotcase)
- [`headerCase`](#headercase)
- [`noCase`](#nocase)
- [`paramCase`](#paramcase)
- [`pascalCase`](#pascalcase)
- [`pathCase`](#pathcase)
- [`sentenceCase`](#sentencecase)
- [`snakeCase`](#snakecase)

#### `camelCase`

> Transform into a string with the separator denoted by the next word capitalized.

```ts
camelCase({ some_key: { some_key: true })
// { someKey: { someOtherKey: true }}
```

#### `capitalCase`

> Transform into a space separated string with each word capitalized.

```ts
capitalCase({ some_key: { some_key: true })
// { 'Some Key': { 'Some Other Key': true }}
```

#### `constantCase`

> Transform into upper case string with an underscore between words.

```ts
constantCase({ some_key: { some_key: true })
// { SOME_KEY: { SOME_OTHER_KEY: true }}
```

#### `dotCase`

> Transform into a lower case string with a period between words.

Why would you do this??

```ts
dotCase({ some_key: { some_key: true })
// { 'some.key': { 'some.other.key': true }}
```

#### `headerCase`

> Transform into a dash separated string of capitalized words.

```ts
headerCase({ some_key: { some_key: true })
// { 'Some-Key': { 'Some-Other-Key': true }}
```

#### `noCase`

> Transform into a lower cased string with spaces between words.

```ts
noCase({ some_key: { some_other_key: true })
// { 'some key': { 'some other key': true }}
```

#### `paramCase`

> Transform into a lower cased string with dashes between words.

```ts
paramCase({ some_key: { some_key: true })
// { 'some-key': { 'some-other-key': true }}
```

#### `pascalCase`

> Transform into a string of capitalized words without separators.

```ts
pascalCase({ some_key: { some_key: true })
// { SomeKey: { SomeOtherKey: true }}
```

#### `pathCase`

> Transform into a lower case string with slashes between words.

```ts
pathCase({ some_key: { some_key: true })
// { 'some/key': { 'some/other/key': true }}
```

#### `sentenceCase`

> Transform into a lower case with spaces between words, then capitalize the string.

```ts
sentenceCase({ some_key: { some_key: true })
// { 'Some key': { 'Some other key': true }}
```

#### `snakeCase`

> Transform into a lower case string with underscores between words.

```ts
snakeCase({ 'some key': { 'some other key': true })
// { some_key: { some_other_key: true }}
```

### `CasedObject` class

```ts
import { CasedObject } from 'change-case-object'
```

#### Static functions

[All of the individual functions](#functions) are available as static members.

```ts
CasedObject.camelCase({ some_key: { some_key: true }})
// { someKey: { someOtherKey: true }}
```

#### Instances

```ts
const foo = CasedObject.camelCase({ some_key: { some_key: true }})
console.info(foo.value) // { someKey: { someOtherKey: true }}

// output the value with keys in a different case
console.info(foo.snakeCase) // { some_key: { some_other_key: true }}
console.info(foo.value) // { someKey: { someOtherKey: true }}

// change the case of the value's keys
foo.value = foo.snakeCase
console.info(foo.value) // { some_key: { some_other_key: true }}
```

## License

ISC
