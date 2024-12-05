import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear returns the correct year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

test('getFooterCopy returns "Holberton School" when true is passed', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getFooterCopy returns "Holberton School main dashboard" when false is passed', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification returns the correct notification string', () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
