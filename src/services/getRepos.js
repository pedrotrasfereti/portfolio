const formatName = (nameStr) => {
  const removeCustom =
    nameStr.replace('trybe', '')
      .replace('rocketseat', '')

  const removeHyphen = removeCustom.replace(/-/g, ' ')
  const wordsArr = removeHyphen.split(' ')

  // Capitalize each word in array
  for (var i = 0; i < wordsArr.length; i += 1) {
    wordsArr[i] =
      wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1);
  }

  const formattedName = wordsArr.join(' ')
  return formattedName.trim()
}

const getRepos = async () => {
  const url = 'https://api.github.com/users/pedrotrasfereti/repos'
  const response = await fetch(url)
  const result = await response.json()

  const reposData =
    result
      .filter((({ name, fork }) => (
        !['pedrotrasfereti', 'portfolio'].includes(name) && !fork
      )))
      .map(((
        {
          name,
          language,
          description,
          topics,
          html_url,
        }
      ) => (
        {
          name: formatName(name),
          language,
          description,
          topics,
          html_url,
        }
      )))

  return reposData
}

const defaultValue = [
  {
    name: '',
    language: '',
    description: '',
    topics: [
      '',
    ],
    html_url: '',
  },
]

export { defaultValue, getRepos }
