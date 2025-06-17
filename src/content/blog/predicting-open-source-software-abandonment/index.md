---
title: "Predicting Open Source Software Abandonment"
description: "Building Github Graveyard "
date: "Dec 11 2024"
draft: true
---

Have you ever wondered if that open source project you're relying on will still be maintained next year? It's a question I've been thinking about a lot recently. Every time I add a new dependency or build on top of someone else's work, I'm making a bet on the future. Some bets are safer than others. Maybe a library with 50,000 will stick around for another 5 years. But what about those hidden gems with a few hundred stars that solve your exact problem but might be archived tomorrow?

> > How do I know what the bet on?

That was the question gnawing at my mind as I sat down at my desk to kick off another side-project.

Nobody, as far as I could tell at the time, had attempted to predict the exact day of software abandonment. To some extent, this makes total sense - why would any bother? Predicting an exact "death day" is futile. It's dependent on countless intangibles and trivial events. Perhaps the primary maintainer has missed their regular coffee that morning. Or maybe they had a bad interaction with another developer that finally caused them to throw in the towel. Prediction, I feared, may not actually be possible.

Despite concerns, as is often the case with side projects before getting stuck into the actual hard graft, I imagined the it would at least be fun. I was also spurred on by the fact that the project seemed _almost_ failure-proof; even an "in-the-ballpark" prediction about anticipated project abandonment could provide a useful frame of reference for software teams; ultimately, it's a conversation-starter to help engineers assess whether the benefit of using a particular piece of software aligns with their risk appetite for its death.

Most importantly, I'd also come up with a killer name, Github Graveyard, worth 5 or possibly 6 upvotes on Reddit.

## A (Very Brief) Lit Review

Much of the existing research on this topic is inaccessible to me behind academic paywalls, which feels painfully ironic. What is accessible hasn't left the pages of academic journals and has perhaps been read by just a handful of others. As someone who has never worked in academia, this has always struck me as odd. Why can't data science papers come with some sort of interactive demo or tool that makes its findings easily accessible and immediately replicable to the broader community? There are probably structural, cultural, and technical barriers here that are preventing this from happening - and I'm not going to pretend to know why.

Survival analysis of OSS has historically often involved one of two closely related statistical approaches, Kaplan-Meier (K-M) analysis and Cox proportional hazards model analysis (sometimes abbreviated as proportional hazards model or Cox model). K-M is a univariate approach, while Cox analysis is multivariable. Both use many familiar aspects of parametric and nonparametric statistical techniques (e.g., independent and dependent variables, null hypothesis testing, and confidence intervals). Other survival techniques do exist, including approaches based on support vector machines, random forests, and gradient boosted trees - although I couldn't find evidence, at least in the open source, that these had been applied to OSS survival.

### Understanding the Basics: Kaplan-Meier and Cox Models

Let me break down these statistical methods in simpler terms:

**Kaplan-Meier (K-M) Analysis**
The K-M method calculates the probability of survival (continued maintenance) at each point in time. It's particularly useful because it can handle projects that are still active when you stop observing them (called "censored" data in statistics).

For example, if after one year:

- 80 projects are still maintained
- 15 projects have been abandoned
- 5 projects are lost to follow-up (we don't know their status)

The K-M method would calculate the survival probability as 80/100 = 0.8 or 80% at the one-year mark.

**Cox Proportional Hazards Model**
While K-M analysis tells us the probability of survival, it doesn't tell us why some projects survive longer than others. This is where the Cox model comes in. It's like having a formula that considers multiple factors that might affect a project's survival.

For example, the Cox model might look at:

- Number of contributors
- Project age
- Number of stars
- Frequency of commits

The model then tells us how each of these factors influences the likelihood of a project being abandoned. It's called "proportional hazards" because it assumes that the effect of these factors on survival remains constant over time.

Let's add some basic notation to make this more precise:

For the Cox model, the hazard function is:

\[ h(t|X) = h_0(t) \exp(\beta_1X_1 + \beta_2X_2 + ... + \beta_pX_p) \]

Where:

- \(h(t|X)\) is the hazard rate at time t for a project with characteristics X
- \(h_0(t)\) is the baseline hazard (the hazard when all X's are 0)
- \(\beta_i\) are the coefficients that tell us how each factor affects survival
- \(X_i\) are the project characteristics (like number of stars, contributors, etc.)

The main difference is that K-M analysis is like taking a snapshot of survival rates, while the Cox model is like having a recipe that explains what ingredients (factors) make a project more or less likely to survive.

I eventually settled on XGBoost's AFT (accelerated failure time model), which outputs a predicted time-to-event rather than a risk score.

Shortcomings

The first sentence of the paper seems slightly misplaced.

> > SOFTWARE needs to be continuously updated and maintained to keep being useful

On many levels, this simply isn't true. Just because of a piece of software is abandoned doesn't mean it now lacks utility. Many abandoned projects are "complete" in the sense that they fulfill their intended purpose, such as the original Unix utilities - many of which have remained largely unchanged for decades because they do one thing and do it well.

Security concerns are often cited as a reason to avoid abandoned software, but this also isn't quite black and white. It's still possible to make good use of abandoned software in isolated environments or when handling non-sensitive data. Mature pieces of software even when abandoned, will have fewer security holes well-understood, battle-tested algorithms and protocols

Furthermore, the utility of software isn't solely determined by its maintenance status. Many abandoned projects continue to serve their users effectively because:

## References

Li, X., Moreschini, S., Pecorelli, F., & Taibi, D. (n.d.). OSSARA: Abandonment Risk Assessment for Embedded Open Source Components. Tampere University. [Under review by IEEE]. Retrieved from https://fabiano-pecorelli.github.io/publications/journals/J7.pdf
