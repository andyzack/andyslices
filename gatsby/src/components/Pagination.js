import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const PaginationStyles = styled.div`
  align-content: center;
  align-items: center;
  border: 1px solid var(--grey);
  border-radius: 5px;
  display: flex;
  justify-items: center;
  margin: 2rem 0;
  text-align: center;
  width: 100%;
  & > * {
    border-right: 1px solid var(--grey);
    flex: 1;
    padding: 1rem;
    text-decoration: none;
    &[aria-current],
    .current {
      color: var(--red);
    }
    &[disabled] {
      color: var(--grey);
      pointer-events: none;
    }
  }
`;

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
}) {
  // make more variables
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;
  return (
    <PaginationStyles>
      <Link disabled={!hasPrevPage} to={`${base}/${prevPage}`}>
        &lt; Prev
      </Link>
      {/* {Array.from({ length: totalPages }).map((_,i))} */}
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link key={i} to={`${base}/${i > 0 ? i + 1 : ''}`}>
          {i + 1}
        </Link>
      ))}
      <Link disabled={!hasNextPage} to={`${base}/${nextPage}`}>
        Next &gt;
      </Link>
    </PaginationStyles>
  );
}
