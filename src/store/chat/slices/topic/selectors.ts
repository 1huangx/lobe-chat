import { ChatTopic } from '@/types/topic';

import { ChatStore } from '../../store';

const currentTopics = (s: ChatStore): ChatTopic[] => s.topics;

const currentActiveTopic = (s: ChatStore): ChatTopic | undefined => {
  return s.topics.find((topic) => topic.id === s.activeTopicId);
};
const searchTopics = (s: ChatStore): ChatTopic[] => s.searchTopics;

// make a func to select only the topics of given session id
const currentTopicsBySessionId =
  (sessionId: string) =>
  (s: ChatStore): ChatTopic[] =>
    currentTopics(s).filter((topic) => topic.sessionId === sessionId);

const displayTopics = (s: ChatStore, sessionId: string): ChatTopic[] =>
  s.isSearchingTopic ? searchTopics(s) : currentTopicsBySessionId(sessionId)(s);

const currentUnFavTopics = (s: ChatStore): ChatTopic[] => s.topics.filter((s) => !s.favorite);

const currentTopicLength = (s: ChatStore): number => currentTopics(s).length;

const getTopicById =
  (id: string) =>
  (s: ChatStore): ChatTopic | undefined =>
    currentTopics(s).find((topic) => topic.id === id);

export const topicSelectors = {
  currentActiveTopic,
  currentTopicLength,
  currentTopics,
  currentTopicsBySessionId,
  currentUnFavTopics,
  displayTopics,
  getTopicById,
  searchTopics,
};
