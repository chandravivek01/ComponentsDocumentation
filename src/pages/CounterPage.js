import useCounter from '../hooks/use-counter';
import Button from '../components/Button';

const CounterPage = ( { initialCount } ) => {

    const { count, increment } = useCounter(initialCount);

    return (
        <>
            <h1>Count is {count}</h1>
            <Button onClick={increment} >Increment</Button>
        </>
    )
}

export default CounterPage