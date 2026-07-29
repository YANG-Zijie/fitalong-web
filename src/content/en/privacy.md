# FitAlong Privacy Policy

Last updated: July 27, 2026

FitAlong provides fitness training assistance for generally healthy adults. It does not provide medical diagnosis, treatment, or rehabilitation services.

## Data Stored on Your Device

FitAlong uses Apple SwiftData to store your date of birth, optional biological sex, optional height, weight and body-fat percentage, weight records and trends, training location, selected available equipment, four-week plan, planned-workout logs, independent workouts that you add outside the plan, Apple Health workout and weight summaries that you choose to import, structured body feedback, automatic adjustment records, AI consent state, AI coach style, AI coach conversation history, daily-coach switches and the current day's generated result, and minimal product events on your device. An independent workout may contain its type or custom name, date and time, duration, perceived effort, overall feeling, and optional notes, and remains distinct from a FitAlong plan workout. Your age is calculated from your date of birth and is not stored as a separate field that you must maintain.

The initial onboarding requires your date of birth to confirm that you are at least 18 and to calculate your age. Biological sex, height, weight and body fat are optional. Your optional display name and these profile fields stay on your device by default. Physical-limitation notes, body areas, discomfort details and workout notes are sent only when you separately consent to AI processing and actually use AI enhancement, within the scope below.

The app stores a random anonymous purchase identifier in Apple Keychain for the StoreKit `appAccountToken`, subscription verification and purchase restoration. Production builds do not ask you for a model API key. Internal Debug builds may store a developer-provided test API key.

## Apple System Workouts and Apple Health

FitAlong can use WorkoutKit to preview or schedule walking, running and other Apple system workouts. Depending on device and workout-type support, a plan may appear in Fitness on iPhone or Workout on Apple Watch. People without an Apple Watch can also record supported outdoor workouts directly in Fitness on iPhone. Workout-scheduling authorization is used only to manage system workouts created by FitAlong and does not grant access to health data.

After you separately allow Apple Health access, FitAlong can import a completed, matching walking or running workout from the scheduled day, whether it was recorded by a supported iPhone, Apple Watch or another compatible source. The imported data may contain start and end time, duration, distance, available average and maximum heart rate, heart-rate samples, active energy, recording source and system workout identifier. Heart-rate samples are processed transiently on device to calculate FitAlong's estimated heart-rate zones. The app persists aggregate zone durations, not the individual sample series. The imported summary stays on your iPhone and lets you confirm completion before entering perceived effort, fatigue and body feedback.

When you enable weight synchronization on the Progress page, FitAlong requests permission to read and write body mass. With the corresponding permission, the app reads up to two years of Apple Health weight records and saves weights entered manually or after a workout in FitAlong to Apple Health. HealthKit sample identifiers are used to prevent duplicates. If you delete a manual entry written by FitAlong, the app also attempts to delete its matching Apple Health sample. Records from other sources should be managed in Apple Health.

This version does not request location access or read or store GPS routes from Apple Health. Imported Apple Health workout values, heart-rate zones, weight history, weight trends and independent workout records are not sent to FitAlong cloud services or third-party AI. When a Pro user actively uses AI Coach and has consented to AI processing, the app may send a rules-derived cardio-response conclusion (stable, improving or elevated load), but does not send average or maximum heart rate, active energy, zone durations or individual samples. An AI request may also include the single weight value currently saved in your profile, as described below. Refusing or withdrawing WorkoutKit or HealthKit access does not affect local rules-based plans, ordinary guided sessions or manual workout logging. You can manage these permissions in iOS and Apple Health settings.

## Subscription Verification and Cloud Services

FitAlong does not require account registration. Apple App Store handles purchases, renewals, refunds and purchase restoration. To verify Pro access, the app sends the Apple-signed transaction, anonymous purchase identifier, request ID, app, rule and consent versions, and bound service region to the relevant FitAlong cloud service.

Users of the mainland China App Store are bound to the Beijing service. Users of other stores are bound to the Singapore service. The region does not silently change because of travel, IP address, system language or app language, and requests are not automatically forwarded to the other region during an outage.

The cloud service stores only subscription state, notification idempotency records and minimal usage records. Logs may contain only a request ID, irreversible hash of the anonymous identifier, versions, model, token counts, latency, status code and error type. They must not contain request bodies, Apple-signed transactions, model prompts, full model responses or health-related fields.

## Optional Third-Party AI

Rules mode does not call third-party AI. AI enhancement is available only to Pro users, but purchasing Pro does not constitute consent to AI processing. FitAlong calls Alibaba Cloud Qwen through the service region bound to the app only after you have reviewed the processor, fields, purposes and regional information and explicitly consented.

Data allowed in a Qwen request is limited to:

- an optional display name that you provided, limited to 40 characters, so summaries, encouragement and answers can address you naturally;
- age calculated on the device, plus biological sex, height, weight and body-fat percentage that you actually provided;
- the current app language code, limited to `en` or `zh-Hans`, solely to request output in the corresponding language;
- training goal, the locally validated fat-loss strategy and body-focus code when applicable, experience, weekly frequency, session duration and training environment;
- rules-generated plan copy that needs improvement;
- physical-limitation notes and structured body areas;
- source-week body sensations, structured discomfort areas, discomfort details and workout notes;
- source-week planned and logged workout counts, average completion, perceived effort and fatigue;
- non-diagnostic risk level and reason codes generated by local rules; and
- a temporary plan version without health free text, allowed adjustment actions, set, repetition and RPE ranges, target exercise IDs, locally approved replacement exercise IDs, and any treadmill segments plus locally allowed speed or incline changes; and
- your selected structured coach style plus the optional display name, training goal and daily-coach aggregates: training or rest day, current week, whether today's session is complete, completion streak, and seven-day planned and completed counts and average completion, effort and fatigue. The daily-coach endpoint does not send age, biological sex, height, weight, body-fat percentage or health free text.
- for AI coach questions, a 7- or 28-day training summary, up to 12 workouts from the current plan, up to 28 workout results in the selected window, the next workout, the latest adjustment reason, and up to 12 recent length-limited conversation messages.
- when you play an AI reply or enable automatic reading, the speech endpoint receives only that single AI reply, selected voice, structured coach style and language code. It does not resend your training profile, physical limitations, body measurements or conversation history.

Free text is trimmed and length-limited on the device. An optional display name is limited to 40 characters, physical-limitation notes and each discomfort detail to 500 characters, each workout note to 800 characters, each coach message to 1,200 characters, and each adjustment request to no more than seven source-week feedback records. After you consent to AI processing, a display name that you provided may be included so summaries, encouragement and answers can address you naturally. Requests do not proactively include your full date of birth, detailed equipment list, contact details, the full AI conversation archive, a local data revision string containing body areas, unrelated full training history, Apple-signed transactions, anonymous purchase identifier or API key. Optional profile fields that you do not provide are omitted. The detailed equipment list is used by local rules on the iPhone to filter exercise candidates, and AI may propose only from the resulting exercise IDs. Do not enter unrelated identifying information in your display name or free text. Red-flag states such as chest pain, faintness or marked shortness of breath, and questions containing equivalent urgent language, do not call AI.

The complete AI coach conversation stays on your iPhone. Each request temporarily processes only the limited recent messages and training context described above. FitAlong cloud services do not write questions, answers, training summaries, AI request bodies or full model responses to the business database or logs. Qwen processes requests under the applicable Alibaba Cloud data-processing terms. Withdrawing consent stops new third-party AI requests. Mainland China and global services remain isolated and do not automatically forward requests across regions.

Natural speech is generated with Alibaba Cloud Qwen `qwen3-tts-instruct-flash`. The FitAlong cloud service streams the PCM audio generated by Qwen and does not write the spoken text or audio to the business database. The complete audio is assembled and cached only on the iPhone for up to seven days, subject to a 50 MB total limit, to avoid generating the same reply repeatedly. If generation fails, FitAlong does not switch voices automatically. You may retry or explicitly choose the iPhone system voice for that playback only; system speech runs locally and sends no new request to Qwen.

Qwen may return titles, summaries, warm-ups, cooldowns, coaching notes, daily training summaries and encouragement, and may answer general questions about the current plan, recovery, sleep, hydration and food around training. The AI coach does not provide medical diagnosis, therapeutic diets, medication advice or extreme weight-loss plans. The daily summary and encouragement share at most one model call per local calendar day; FitAlong uses safe bilingual local copy if the service is unavailable, output is invalid, or settings change later that day. Qwen may also return a structured training-adjustment proposal within the local safety space described above. For treadmill work, it may choose only an allowed speed or incline delta; it cannot invent segments or increase both speed and incline at once. A proposal is applied only after server-side format and range validation, a final safety check on the iPhone, and your explicit confirmation. Qwen cannot expand workload limits, select exercises outside the candidate list, change training frequency, determine safety state, or make a medical classification. If the request fails, times out, is rate-limited, returns invalid content, or fails local validation, the app uses the free local rules content and adjustment. Withdrawing AI consent does not affect local rules-based plans, automatic adjustments, or other benefits that do not require sending data.

You may opt into a local reminder at 9:00 each day. iOS schedules it only after notification permission is granted. Its fixed bilingual entry message contains no body information, training metrics or model-generated text, and it never starts AI speech from the lock screen. Automatic natural-speech playback is off by default. If you enable it, FitAlong may read that day's AI encouragement at most once after you open the app and the content is generated. FitAlong removes the schedule when you disable both daily sections, turn notifications off or withdraw AI consent. The first version does not use a separate remote-push service to deliver daily coaching content.

## Local Analytics and Feedback

FitAlong currently uses no third-party analytics SDK. Initial experiment events are stored only on the device using standardized event names and limited properties such as week, workout number, completion bucket, adjustment reason code or feedback category. They do not contain your name, free text, specific health information, API key, full training plan, or directly identifying information.

When sending TestFlight feedback, you may choose to include a local experiment summary. It contains only activation state, deduplicated first-week workout-log count, whether week three or four was reached, and counts of automatic adjustments, discomfort events and feedback opens. It is excluded by default and does not contain your name, body areas, workout notes or full plan.

## Deletion

You can clear the current plan's local AI coach conversation, or delete your training profile, plans, planned-workout logs, independent workouts, weight records and trends, imported Apple Health summaries, structured body feedback, automatic adjustments, AI consent, AI coach conversations, natural-speech cache and local analytics events from Settings. If a verifiable subscription transaction is available, the app first asks the bound FitAlong cloud service to delete the corresponding business records and then deletes local content. If the network request fails, the app clearly states that cloud deletion has not completed. When all local data is deleted, FitAlong makes a best-effort attempt to delete body-mass samples it wrote, but it cannot delete body weights or original workouts written to Apple Health by other sources. You can continue to manage those records in Apple Health.

The anonymous purchase identifier and bound service region are retained to preserve purchase restoration and regional isolation. Apple purchase records maintained under applicable law are not deleted by FitAlong. A test API key stored by an internal Debug build is deleted with local app data.

## Contact

If you have questions about this Privacy Policy or FitAlong's data practices, email `yangzijie2026@gmail.com`.

Last updated: July 28, 2026.
