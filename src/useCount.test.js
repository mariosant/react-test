import { act, renderHook } from '@testing-library/react-hooks'
import {useCount, useAsyncCount} from './useCount';

describe('useCount hook', () => {
    test('returns zero by default', () => {
        const { result } = renderHook(() => useCount())
        const [counter] = result.current;

        expect(counter).toBe(0);
    })

    test('returns initial prop by default', () => {
        const { result } = renderHook(() => useCount(10))
        const [counter] = result.current;

        expect(counter).toBe(10);
    })

    test('increments by one by default', () => {
        const { result } = renderHook(() => useCount())
        const [_, increment] = result.current;

        act(() => increment());

        const [counter] = result.current;
        
        expect(counter).toBe(1);
    })

    test('increments by one by prop', () => {
        const { result } = renderHook(() => useCount())
        const [_, increment] = result.current;

        act(() => increment(10));

        const [counter] = result.current;
        
        expect(counter).toBe(10);
    })
})

describe('useAsyncCount hook', () => {
    test('returns zero by default', () => {
        const { result } = renderHook(() => useAsyncCount())
        const [counter] = result.current;

        expect(counter).toBe(0);
    })

    test('returns initial prop by default', () => {
        const { result } = renderHook(() => useAsyncCount(10))
        const [counter] = result.current;

        expect(counter).toBe(10);
    })

    test('increments by one by default', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useAsyncCount())
        const [_, increment] = result.current;

        increment()
        await waitForNextUpdate()

        const [counter] = result.current;
        
        expect(counter).toBe(1);
    })

    test('increments by prop', async () => {
        const { result } = renderHook(() => useAsyncCount())
        const [_, increment] = result.current;

        await act(() => increment(10));
        const [counter] = result.current;
        
        expect(counter).toBe(10);
    })
})