import axios from 'axios'

// List of repos that will not show in the slide
const excludeList = [
  'pedrotrasfereti',
  'portfolio',
  'javascript-game',
];

const prettify = (nameStr) => {
  const removeHyphen = nameStr.replace(/-/g, ' ')
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
  const response = await axios.get(url)
  const data = response.data

  return data
      .filter((({ name, fork }) => (
        !excludeList.includes(name) && !fork
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
          name: prettify(name),
          language,
          description,
          topics,
          html_url,
        }
      )))
}

const defaultValue = [
  {
    name: '',
    language: '',
    description: '',
    topics: [''],
    html_url: '',
  },
]

export { defaultValue, getRepos }
