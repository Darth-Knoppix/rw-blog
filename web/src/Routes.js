// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/blog-post/{id}" page={BlogPostPage} name="blogPost" />
      <Route path="/" page={HomePage} name="home" />
      <Private unauthenticated="home">
        <Route path="/admin/posts/new" page={NewPostPage} name="newPost" />
        <Route path="/admin/posts/{id}/edit" page={EditPostPage} name="editPost" />
        <Route path="/admin/posts/{id}" page={PostPage} name="post" />
        <Route path="/admin/posts" page={PostsPage} name="posts" />
        <Route path="/about" page={AboutPage} name="about" />
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
