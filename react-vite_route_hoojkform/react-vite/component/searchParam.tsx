import { useSearchParams } from 'react-router'

const SearchParam = () => {
  const [searchParams] = useSearchParams()

  return (
    <div>
      <p>
        You searched for <i>{searchParams.get('q')?searchParams.get('q'):0}</i>
      </p>
    </div>
  )
}

export default SearchParam