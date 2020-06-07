import { TwitterApi } from "https://deno.land/x/deno_twitter_api/mod.ts";
import keys from "./keys.ts";
const twitterApi = new TwitterApi(keys);

interface tweet {
  full_text: string;
}

const userTimeline = await twitterApi.get("statuses/user_timeline.json", {
  screen_name: "killvung",
  count: "20",
  trim_user: "true",
  tweet_mode: "extended",
});

const tweets: [String] = (await userTimeline.json())
  .map(({ full_text }: tweet) => full_text);

console.log(tweets)
