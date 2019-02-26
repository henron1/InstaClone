import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form } from 'semantic-ui-react';
import styled from 'styled-components';

const CreatePost = props => {
  console.log(props);
  return (
    <CreatePostContainer>
      <h1>Add a new Post</h1>
      <Form>
        <Form.Field>
          <label>Image URL</label>
          <input placeholder="Image URL" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </CreatePostContainer>
  );
};

export default CreatePost;

const CreatePostContainer = styled.div`
  margin: auto;
  width: 50%;
  height: 100vh;
  margin-top: 50px;
  background-color: FAFAFA;
  h1 {
    text-align: center;
  }
`;