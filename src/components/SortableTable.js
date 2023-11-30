import Table from './Table'
import { GoChevronUp, GoChevronDown } from 'react-icons/go'
import useSort from '../hooks/use-sort'

const SortableTable = (props) => {

    const { config, data } = props;
    const { sortOrder, sortBy, setSortColumn, sortedData} = useSort(data, config);

    const updatedConfig = config.map((column) => {

        if (!column.sortValue)
            return column;

        return {
            ...column,
            header: () =>
                <th className='cursor-pointer hover:bg-gray-100' onClick={() => setSortColumn(column.label)}>
                    <div className='flex items-center'>
                        {column.label}
                        {getIcons(column.label, sortBy, sortOrder)}
                    </div>

                </th>
        }
    });

    return (
        <>
            <Table {...props} data={sortedData} config={updatedConfig} />
        </>
    )
}

function getIcons(label, sortBy, sortOrder) {

    if (label !== sortBy)
        return <div>
            <GoChevronUp />
            <GoChevronDown />
        </div>;;

    if (sortOrder === null)
        return <div>
            <GoChevronUp />
            <GoChevronDown />
        </div>;

    else if (sortOrder === 'asc')
        return <GoChevronUp />;

    else if (sortOrder === 'desc')
        return <GoChevronDown />;
}

export default SortableTable