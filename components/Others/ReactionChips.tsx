import React from "react";
import { ReactionProps, ReactionType } from "@/lib/types";

function ReactionChips({ reactions }: { reactions: ReactionProps[] }) {
  const reactionCountsWithEmojis = showReactionsWithEmojis(reactions);
  // const reactionCounts = showReactionsWithEmojis(reactions || []);
  // const totalReactions = reactionCounts.total.count;
  return (
    <div className="flex w-full -space-x-2 scale-x-[-1] py-[2px] px-3 text-color_dark hover:bg-hoverAccent2 rounded-md mb-1">
      {Object.entries(reactionCountsWithEmojis).map(
        ([reactionType, { count, emoji }], index) =>
          count > 0 && (
            <span
              key={reactionType}
              className={`${
                reactionType == "total"
                  ? "border-none p-0"
                  : "p-[1px] border-[2px] border-white rounded-full bg-chipsAccent "
              } `}
            >
              {`${emoji}`}
            </span>
          )
      )}
    </div>
  );
}

function showReactionsWithEmojis(
  reactions: ReactionProps[]
): Record<string, { count: number; emoji: string }> {
  const reactionCounts: Record<string, { count: number; emoji: string }> = {
    [ReactionType.Fire]: { count: 0, emoji: "🔥" },
    [ReactionType.RaisingHands]: { count: 0, emoji: "🙌" },
    [ReactionType.ExplodingHead]: { count: 0, emoji: "🤯" },
    [ReactionType.Unicorn]: { count: 0, emoji: "🦄" },
    [ReactionType.Heart]: { count: 0, emoji: "💖" },
    total: { count: 0, emoji: "" },
  };

  reactions.forEach((reaction) => {
    const uniqueReactionTypes = new Set(reaction.reaction_types);

    // Update counts for each unique reaction type
    uniqueReactionTypes.forEach((type) => {
      reactionCounts[type].count += 1;
      reactionCounts.total.count += 1;
    });
  });

  return reactionCounts;
}

export default ReactionChips;
