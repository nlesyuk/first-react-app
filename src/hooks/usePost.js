// name must be starts from use
// custom hooks is logic which use standart react hooks like useState, useMemo, etc


import {useMemo} from 'react'

export const useSortedPosts = (posts, sort) => {
  const sortedPost = useMemo(() => {
    return sort
      ? [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
      : posts
  }, [sort, posts])

  return sortedPost
}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort)

  const sortedAndSearchedPost = useMemo(() => {
    const searchQueryLowerCase = `${query}`.toLowerCase()
    return searchQueryLowerCase
      ? [...sortedPosts].filter(p => p.title?.toLowerCase().includes(searchQueryLowerCase) || p.body?.toLowerCase().includes(searchQueryLowerCase))
      : sortedPosts
  }, [query, sortedPosts])

  return sortedAndSearchedPost
}