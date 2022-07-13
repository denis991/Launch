import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Input
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { getNewsThunk } from '../../redux/actions/NewsActions';
import initState from '../../redux/initState';
// function News({ items, profiles }) {
//   const [query, setQuery] = useState('');
//   const [text, setText] = useState('');
//   const dispatch = useDispatch();
//   const res = useSelector((state) => state.news);

//   useEffect(() => {
//     dispatch(getNewsThunk());
//   }, []);

//   return (
//     <div>
//       {res.map((item) => (
//         <div key={item.id}>
//           <p>
//             Title:
//             {item.items}
//           </p>
//           <p>
//             Genre:
//             {item.profiles}
//           </p>
//         </div>

//       ))}
//     </div>
//   );
// }

function News() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [text, setText] = useState('');
  const [largeTitle, setLargeTitle] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // loading state

  useEffect(() => {
    setIsLoading(true);

    const fetchNews = async () => {
      const url = `https://hn.algolia.com/api/v1/search?query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setItems(data.hits);
      setLargeTitle(data.hits[0]);
    };

    fetchNews();
    setIsLoading(false);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      console.log('Input is empty');
    } else {
      setQuery(text);
      setText('');
      console.log(text);
      console.log(query);
    }
  };

  return (
    <div className="container my-4">
      <div className="my-2"> </div>
      <main>
        <div className="row" />

        <div className="card mb-3 border-0">
          <div className="card-body">
            <div>

              <form
                onSubmit={handleSubmit}
              >
                <Input
                  className="input mb-1"
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Search for something..."
                  autoComplete="off"
                  required
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <Button
                  className="batton mb-3"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Search
                </Button>
              </form>

              {items.map((item) => (
                <Card className="card mb-3">
                  <CardBody>
                    <CardText
                      key={item.objectID}
                    >
                      <CardTitle tag="h5">
                        {item.title}
                      </CardTitle>
                      <CardSubtitle className="text-gray-600">
                        <CardText>
                          By
                          {' '}
                          {item.author}

                        </CardText>
                      </CardSubtitle>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read More
                      </a>
                    </CardText>
                  </CardBody>
                </Card>
              ))}

            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default News;
