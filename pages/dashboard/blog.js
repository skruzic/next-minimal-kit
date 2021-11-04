import { Icon } from "@iconify/react";
import plusFill from "@iconify/icons-eva/plus-fill";
import NextLink from "next/link";
// material
import { Grid, Button, Container, Stack, Typography } from "@mui/material";
// components
import Page from "../../components/Page";
import {
  BlogPostCard,
  BlogPostsSort,
  BlogPostsSearch,
} from "../../components/_dashboard/blog";
//
import POSTS from "../../_mocks_/blog";

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "oldest", label: "Oldest" },
];

// ----------------------------------------------------------------------

export default function Blog() {
  return (
    <Page title="Dashboard: Blog | Minimal-UI">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
          <NextLink href="#" passHref>
            <Button
              variant="contained"
              component="a"
              startIcon={<Icon icon={plusFill} />}
            >
              New Post
            </Button>
          </NextLink>
        </Stack>

        <Stack
          mb={5}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
