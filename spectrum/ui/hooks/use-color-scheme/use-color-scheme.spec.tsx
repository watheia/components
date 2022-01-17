import { renderHook, act } from '@testing-library/react-hooks';
import { useColorScheme } from './use-color-scheme';

it('should increment counter', () => {
  const { result } = renderHook(() => useColorScheme())
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})
