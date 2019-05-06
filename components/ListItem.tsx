import * as React from 'react'
import Link from 'next/link';

interface IDataObject {
  id: number
  name: string
}

type Props = {
  data: IDataObject,
}

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href={`/detail?id=${data.id}`}>
    <a>{data.id}: {data.name}</a>
  </Link>
);

export default ListItem
