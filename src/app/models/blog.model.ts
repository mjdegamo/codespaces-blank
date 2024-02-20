export interface Blog {
    id: number,
    category: string[],
    title: string,
    content: string,
    author: string,
    imageLink: string,
    datePosted: Date,
}

export interface BlogGroup extends Array<Blog> { }
