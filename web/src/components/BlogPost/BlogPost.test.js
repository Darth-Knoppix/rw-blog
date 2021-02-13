import { render } from '@redwoodjs/testing'

import BlogPost from './BlogPost'

describe('BlogPost', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogPost post={{ id: 'a', title: 'title' }} />)
    }).not.toThrow()
  })
})
