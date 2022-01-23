import { renderHook, act } from '@testing-library/react-hooks';
import { useMediaQuery } from './use-media-query';

it('should match media queries', () => {
  window.matchMedia = jest.fn().mockImplementation((query) => {
    return {
      matches: query === '(min-width: 240px) and (max-width: 767px)',
      media: '',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  });
  const { result } = renderHook(() =>
    useMediaQuery('(min-width: 240px) and (max-width: 767px)')
  );
  expect(result.current).toEqual(true);
});
