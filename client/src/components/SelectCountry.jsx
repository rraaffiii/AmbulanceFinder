import { getCountries } from 'react-phone-number-input/input'

const SelectCountry = ({ value, onChange, labels, ...rest }) => (
  <select
    {...rest}
    value={value}
    onChange={(event) => onChange(event.target.value || undefined)}
  >
    <option value=''>{labels['BD']}</option>
    {getCountries().map((country) => (
      <option key={country} value={country}>
        {labels[country]}
      </option>
    ))}
  </select>
)

export default SelectCountry
