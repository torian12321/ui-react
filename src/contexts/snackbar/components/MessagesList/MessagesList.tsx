import { List, ListItem } from '@mui/material';

import type { MessagesListProps } from './MessagesList.types';

export const MessagesList = ({ messages = [] }: MessagesListProps) => (
  <List sx={{ p: 0 }}>
    {messages.map((message, index) => (
      <ListItem key={index}>{message}</ListItem>
    ))}
  </List>
);
