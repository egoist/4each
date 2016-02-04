import test from 'ava'
import each from './'
import {jsdom} from 'jsdom'

// fake dom
const arr = ['a', 'b', 'c']
const document = jsdom('<li>a</li><li>b</li><li>c</li>')

test('dom', t => {
	each(document.querySelectorAll('li'), (el, index) => {
		t.is(el.textContent, arr[index])
	})
})

test('array', t => {
	each(['a', 'b', 'c'], (val, index) => {
		t.is(val, arr[index])
	})
})

test('object', t => {
	const obj = {foo: 'a', bar: 'b'}
	each(obj, (val, key) => {
		t.is(obj[key], val)
	})
})
