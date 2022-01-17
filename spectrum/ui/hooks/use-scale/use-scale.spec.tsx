import { renderHook, act } from '@testing-library/react-hooks';
import { useScale } from './use-scale';

it('should increment counter', () => {
  const { result } = renderHook(() => useScale())
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})
