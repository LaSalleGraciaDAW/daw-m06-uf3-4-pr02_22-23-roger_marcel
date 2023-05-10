function Country (country) {
    console.log(country.country);
    return (
        <div>
            {country.country.name}
            {country.country.emoji}
        </div>
    )
}

export default Country;