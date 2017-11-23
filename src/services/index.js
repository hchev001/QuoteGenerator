

export const getQuote = (success) => {
  const key = 'i4GR1U5S7wmshGvspaXwEq9QqtrYp1wElvOjsnWhcDjJXuUJJm';
  return fetch('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1', {
    headers: {
      'Accept': 'application/json',
      'X-Mashape-Key': key
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success);
}

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    throw error;
  }
}

const parseJSON = (response) => {
  return response.json();
}