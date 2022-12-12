// for: content/api-streamer/examples.textile
/* eslint-disable no-undef */

const nouns = [
  'people',
  'history',
  'way',
  'art',
  'world',
  'information',
  'map',
  'two',
  'family',
  'government',
  'health',
  'system',
  'computer',
  'meat',
  'year',
  'thanks',
  'music',
  'person',
  'reading',
  'method',
  'data',
  'food',
  'understanding',
  'theory',
  'law',
  'bird',
  'literature',
  'problem',
  'software',
  'control',
  'knowledge',
  'power',
  'ability',
  'economics',
  'love',
  'internet',
  'television',
  'science',
  'library',
  'nature',
  'fact',
  'product',
  'idea',
  'temperature',
  'investment',
  'area',
  'society',
  'activity',
  'story',
  'industry',
  'media',
  'thing',
  'oven',
  'community',
  'definition',
  'safety',
  'quality',
  'development',
  'language',
  'management',
  'player',
  'variety',
  'video',
  'week',
  'security',
  'country',
  'exam',
  'movie',
  'organization',
  'equipment',
  'physics',
  'analysis',
  'policy',
  'series',
  'thought',
  'basis',
  'boyfriend',
  'direction',
  'strategy',
  'technology',
  'army',
  'camera',
  'freedom',
  'paper',
  'environment',
  'child',
  'instance',
  'month',
  'truth',
  'marketing',
  'university',
  'writing',
  'article',
  'department',
  'difference',
  'goal',
  'news',
  'audience',
  'fishing',
  'growth',
  'income',
  'marriage',
  'user',
  'combination',
  'failure',
  'meaning',
  'medicine',
  'philosophy',
  'teacher',
  'communication',
  'night',
  'chemistry',
  'disease',
  'disk',
  'energy',
  'nation',
  'road',
  'role',
  'soup',
  'advertising',
  'location',
  'success',
  'addition',
  'apartment',
  'education',
  'math',
  'moment',
  'painting',
  'politics',
  'attention',
  'decision',
  'event',
  'property',
  'shopping',
  'student',
  'wood',
  'competition',
  'distribution',
  'entertainment',
  'office',
  'population',
  'president',
  'unit',
  'category',
  'cigarette',
  'context',
  'introduction',
  'opportunity',
  'performance',
  'driver',
  'flight',
  'length',
  'magazine',
  'newspaper',
  'relationship',
  'teaching',
  'cell',
  'dealer',
  'finding',
  'lake',
  'member',
  'message',
  'phone',
  'scene',
  'appearance',
  'association',
  'concept',
  'customer',
  'death',
  'discussion',
  'housing',
  'inflation',
  'insurance',
  'mood',
  'woman',
  'advice',
  'blood',
  'effort',
  'expression',
  'importance',
  'opinion',
  'payment',
  'reality',
  'responsibility',
  'situation',
  'skill',
  'statement',
  'wealth',
  'application',
  'city',
  'county',
  'depth',
  'estate',
  'foundation',
  'people',
  'history',
  'way',
  'art',
  'world',
  'information',
  'map',
  'two',
  'family',
  'government',
  'health',
  'system',
  'computer',
  'meat',
  'year',
  'thanks',
  'music',
  'person',
  'reading',
  'method',
  'data',
  'food',
  'understanding',
  'theory',
  'law',
  'bird',
  'literature',
  'problem',
  'software',
  'control',
  'knowledge',
  'power',
  'ability',
  'economics',
  'love',
  'internet',
  'television',
  'science',
  'library',
  'nature',
  'fact',
  'product',
  'idea',
  'temperature',
  'investment',
  'area',
  'society',
  'activity',
  'story',
  'industry',
  'media',
  'thing',
  'oven',
  'community',
  'definition',
  'safety',
  'quality',
  'development',
  'language',
  'management',
  'player',
  'variety',
  'video',
  'week',
  'security',
  'country',
  'exam',
  'movie',
  'organization',
  'equipment',
  'physics',
  'analysis',
  'policy',
  'series',
  'thought',
  'basis',
  'boyfriend',
  'direction',
  'strategy',
  'technology',
  'army',
  'camera',
  'freedom',
  'paper',
  'environment',
  'child',
  'instance',
  'month',
  'truth',
  'marketing',
  'university',
  'writing',
  'article',
  'department',
  'difference',
  'goal',
  'news',
  'audience',
  'fishing',
  'growth',
  'income',
  'marriage',
  'user',
  'combination',
  'failure',
  'meaning',
  'medicine',
  'philosophy',
  'teacher',
  'communication',
  'night',
  'chemistry',
  'disease',
  'disk',
  'energy',
  'nation',
  'road',
  'role',
  'soup',
  'advertising',
  'location',
  'success',
  'addition',
  'apartment',
  'education',
  'math',
  'moment',
  'painting',
  'politics',
  'attention',
  'decision',
  'event',
  'property',
  'shopping',
  'student',
  'wood',
  'competition',
  'distribution',
  'entertainment',
  'office',
  'population',
  'president',
  'unit',
  'category',
  'cigarette',
  'context',
  'introduction',
  'opportunity',
  'performance',
  'driver',
  'flight',
  'length',
  'magazine',
  'newspaper',
  'relationship',
  'teaching',
  'cell',
  'dealer',
  'finding',
  'lake',
  'member',
  'message',
  'phone',
  'scene',
  'appearance',
  'association',
  'concept',
  'customer',
  'death',
  'discussion',
  'housing',
  'inflation',
  'insurance',
  'mood',
  'woman',
  'advice',
  'blood',
  'effort',
  'expression',
  'importance',
  'opinion',
  'payment',
  'reality',
  'responsibility',
  'situation',
  'skill',
  'statement',
  'wealth',
  'application',
  'city',
  'county',
  'depth',
  'estate',
  'foundation',
  'grandmother',
  'heart',
  'perspective',
  'photo',
  'recipe',
  'studio',
  'topic',
  'collection',
  'depression',
  'imagination',
  'passion',
  'percentage',
  'resource',
  'setting',
  'ad',
  'agency',
  'college',
  'connection',
  'criticism',
  'debt',
  'description',
  'memory',
  'patience',
  'secretary',
  'solution',
  'administration',
  'aspect',
  'attitude',
  'director',
  'personality',
  'psychology',
  'recommendation',
  'response',
  'selection',
  'storage',
  'version',
  'alcohol',
  'argument',
  'complaint',
  'contract',
  'emphasis',
  'highway',
  'loss',
  'membership',
  'possession',
  'preparation',
  'steak',
  'union',
  'agreement',
  'cancer',
  'currency',
  'employment',
  'engineering',
  'entry',
  'interaction',
  'mixture',
  'preference',
  'region',
  'republic',
  'tradition',
  'virus',
  'actor',
  'classroom',
  'delivery',
  'device',
  'difficulty',
  'drama',
  'election',
  'engine',
  'football',
  'guidance',
  'hotel',
  'owner',
  'priority',
  'protection',
  'suggestion',
  'tension',
  'variation',
  'anxiety',
  'atmosphere',
  'awareness',
  'bath',
  'bread',
  'candidate',
  'climate',
  'comparison',
  'confusion',
  'construction',
  'elevator',
  'emotion',
  'employee',
  'employer',
  'guest',
  'height',
  'leadership',
  'mall',
  'manager',
  'operation',
  'recording',
  'sample',
  'transportation',
  'charity',
  'cousin',
  'disaster',
  'editor',
  'efficiency',
  'excitement',
  'extent',
  'feedback',
  'guitar',
  'homework',
  'leader',
  'mom',
  'outcome',
  'permission',
  'presentation',
  'promotion',
  'reflection',
  'refrigerator',
  'resolution',
  'revenue',
  'session',
  'singer',
  'tennis',
  'basket',
  'bonus',
  'cabinet',
  'childhood',
];

window.ably = {
  ...window.ably,
  docs: {
    DOCS_API_KEY: false,
    randomChannelName: nouns[Math.floor(Math.random() * nouns.length)],
    onApiKeyRetrieved: () => {},
  },
};

function subscribeToCurlRequest(key) {
  var ably = new Ably.Realtime(key);
  const channelName = window.ably.docs.randomChannelName;
  ably.channels.get(channelName).subscribe('greeting', function (message) {
    alert(
      'That was easy, a message was just received from the REST API on channel "' +
        channelName +
        '".\n\nGreeting => ' +
        message.data,
    );
  });
}

if (window.ably.docs.DOCS_API_KEY) {
  subscribeToCurlRequest(window.ably.docs.DOCS_API_KEY);
} else {
  window.ably.docs.onApiKeyRetrieved = subscribeToCurlRequest;
}