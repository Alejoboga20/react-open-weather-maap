import { act, renderHook } from '@testing-library/react-hooks';
import { inputButtons } from '../../fixtures/Locations';
import { useApp } from '../../hooks/useApp';

describe('useApp tests', () => {
  const { result } = renderHook(() => useApp());
  const {
    inputButtons: returnedButtons,
    temp,
    isLoading,
    dailyTemp,
    handleOnClick,
  } = result.current;

  test('should have correct initial State', () => {
    expect(temp).toBe(undefined);
    expect(isLoading).toBe(true);
    expect(dailyTemp).toBe(undefined);
  });

  test('should return properly locations', () => {
    expect(returnedButtons).toEqual(inputButtons);
  });
});
