import { deepStrictEqual as eq } from 'assert'

import { camelCase } from '.'

describe('camel', () => {
  it('converts to camel', () => {
    eq(camelCase({ 'foo_bar': true }), { 'fooBar': true })
    eq(camelCase({ 'foo-bar': true }), { 'fooBar': true })
    eq(camelCase({ 'foo.bar': true }), { 'fooBar': true })
    eq(camelCase({ 'foo.bar.baz': true }), { 'fooBarBaz': true })
    eq(camelCase({ 'foo.bar.baz.qux': true }), { 'fooBarBazQux': true })
  })
})
