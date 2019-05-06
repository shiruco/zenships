import * as React from "react"
import ListItem from './ListItem'

interface IDataObject {
  id: number
  name: string
}

type Props = {
  items: IDataObject[],
}

const List: React.FunctionComponent<Props> = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
