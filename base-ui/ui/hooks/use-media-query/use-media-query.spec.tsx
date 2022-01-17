import { renderHook, act } from '@testing-library/react-hooks';
import { useMediaQuery } from './use-media-query';

it('should increment counter', () => {
  const { result } = renderHook(() => useMediaQuery())
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})
