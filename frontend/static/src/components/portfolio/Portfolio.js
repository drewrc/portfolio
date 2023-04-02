import Pagination from 'react-bootstrap/Pagination';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Repo from './Repos';

function Portfolio() {
    const [repos, setRepos] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const ITEMS_PER_PAGE = 10;

  const getGitHubRepos = async () => {
    try {
      const response = await fetch(
        `/api_v1/github_repos/?page=${currentPage}&page_size=${ITEMS_PER_PAGE}`
      );
      const data = await response.json();
      console.log(data);
      setRepos(data.results);
      setTotalPages(Math.ceil(data.count / ITEMS_PER_PAGE));
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    getGitHubRepos();
  }, [currentPage]);

  const paginationItems = Array.from({ length: totalPages }, (_, i) => (
    <Pagination.Item
      key={i}
      active={i + 1 === currentPage}
      onClick={() => handlePageChange(i + 1)}
    >
      {i + 1}
    </Pagination.Item>
  ));

//   const reposHTML = repos === null ? (
//     <p>Loading...</p>
//   ) : (
//     <>
//       {repos.map((repo) => (
//         <Repo key={repo.id} repo={repo} />
//       ))}
//     </>
//   );
const reposHTML = repos?.map((repo) => (
    <Repo key={repo.id} repo={repo} />
));

  
  return (
    <Container
      style={{
        height: "100vh",
      }}
    >
      <Row>
        <Col>
          <h1>My Portfolio</h1>
          <h1>...oops, check back soon!</h1>
          {reposHTML}
          <Pagination>
            {Array.from({ length: totalPages }, (_, i) => (
              <Pagination.Item
                key={i}
                active={i + 1 === currentPage}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
