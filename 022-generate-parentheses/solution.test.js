const { default: generateParentheses } = require('./solution');

test('type of generateParentheses is function', () => {
  expect(typeof generateParentheses).toBe('function');
});

test('basic examples for generateParentheses()', () => {
  expect(generateParentheses(0)).toEqual(['']);
  expect(generateParentheses(1)).toEqual(['()']);
  expect(generateParentheses(3)).toEqual([
    '((()))',
    '(()())',
    '(())()',
    '()(())',
    '()()()',
  ]);
  expect(generateParentheses(5)).toEqual([
    '((((()))))',
    '(((()())))',
    '(((())()))',
    '(((()))())',
    '(((())))()',
    '((()(())))',
    '((()()()))',
    '((()())())',
    '((()()))()',
    '((())(()))',
    '((())()())',
    '((())())()',
    '((()))(())',
    '((()))()()',
    '(()((())))',
    '(()(()()))',
    '(()(())())',
    '(()(()))()',
    '(()()(()))',
    '(()()()())',
    '(()()())()',
    '(()())(())',
    '(()())()()',
    '(())((()))',
    '(())(()())',
    '(())(())()',
    '(())()(())',
    '(())()()()',
    '()(((())))',
    '()((()()))',
    '()((())())',
    '()((()))()',
    '()(()(()))',
    '()(()()())',
    '()(()())()',
    '()(())(())',
    '()(())()()',
    '()()((()))',
    '()()(()())',
    '()()(())()',
    '()()()(())',
    '()()()()()',
  ]);
});
