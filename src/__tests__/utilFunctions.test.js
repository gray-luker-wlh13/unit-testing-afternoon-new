import {shortenText} from '../utils/functions';
import {wordCount, attachUserName} from '../../server/utils';
import {shortText, longText, posts, users} from '../__tests__/__data__/testData';

test('Does not alter if it has less then 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29);
});

test('shortenText cuts off extra characters after 100 characters and adds three periods', () => {
    const shortened = shortenText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
});

test('word counts counts all of the words in a sentence', () => {
    expect(wordCount(posts)).toBe(233);
});

test('attachUserName should correctly attach a full name to a post', () => {
    const newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty('displayName');
});

test('attachUserName should remove any post with no matching user', () => {
    const newPosts = attachUserName(users, posts);
    const deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost)
});

