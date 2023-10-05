const TableRowItem = (props) => {
    return (
        <tr onClick={() => { props.removeItem(props.contact.id); }}>
            <th scope="row">{props.index + 1}</th>
            <td>{props.contact.fullName}</td>
            <td>{props.contact.phone}</td>
            <td>{props.contact.notes}</td>
        </tr>
    );
}
export default TableRowItem;