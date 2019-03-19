# Setting Limits with Prisma Client

Lets take this `schema.graphql` example

```graphql
type Query {
	posts(
		where: PostWhereInput
		orderBy: PostOrderByInput
		skip: Int
		after: String
		before: String
		first: Int
		last: Int
	): [Post]!
}

type Post {
	id: ID!
	createdAt: DateTime!
	updatedAt: DateTime!
	published: Boolean!
	title: String!
	content: String
}
```

Which is generated from this `datamodel.prisma`

```graphql
type User {
	id: ID! @unique
	email: String! @unique
	name: String
}

type Post {
	id: ID! @unique
	createdAt: DateTime!
	updatedAt: DateTime!
	published: Boolean! @default(value: "false")
	title: String!
	content: String
}
```

By default, prisma limits all queries to 1000 to my understanding.

## Defining Limits Manually in JS

For limiting queries via your resolvers, you can try something like this

In your `resolvers` file or object

```javascript
const resolvers = {
  Query: {
    posts(_, {where, orderBy, skip, after, before, first, last}, ctx) {
      const limit = checkPostLimits({first, last});
      return await ctx.db.posts({
        ...args,
        limit
      });
    }
  }
}
```

In a `utils` like folder... I guess?

```javascript
const MAX_POSTS_LIMIT = 20;
const DEFAULT_POSTS_LIMIT = 5;

export function checkPostLimits(args) {
	let first = optionalChaining(() => args.first) ? args.first : 0;
	const last = optionalChaining(() => args.last) ? args.last : 0;
	const limit = first + last;
	if (limit > MAX_POSTS_LIMIT) {
		throw new Error(
			`Max posts limit reached! You can query up to ${MAX_POSTS_LIMIT} posts. Please correct your first: ${first} & last: ${last} arguments to meet the posts limit!`
		);
	}
	// More in depth logic for handling limits
	if (first != 0 && last > MAX_POSTS_LIMIT) {
		return {
			first: MAX_POSTS_LIMIT,
			last
		};
	}
	if (last != 0 && first > MAX_POSTS_LIMIT) {
		return {
			first,
			last: MAX_POSTS_LIMIT
		};
	}

	return {
		first,
		last
	};
}

// a handy little function to check if a nested field exists
export function optionalChaining(func) {
	try {
		return func();
	} catch (e) {
		return undefined;
	}
}
```
