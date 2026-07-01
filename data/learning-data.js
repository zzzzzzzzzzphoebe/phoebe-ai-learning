window.AI_LEARNING_DATA = {
  entries: [
    {
      id: "2026-07-02",
      date: "2026-07-02",
      title: "Frontier agent 開始進入治理審查與任務型 benchmark 時代",
      topic: "Agent Governance",
      impact: "高",
      memory: "今天要記住：frontier agent 的競爭不再只是誰更強，而是誰能通過治理審查、在特定任務上被量化驗證，並且可被企業放心接進流程。",
      status: "未讀",
      summary:
        "2026-07-01 最值得深讀的公開訊號，不是一個單一模型發布，而是 frontier agent 正在同時被兩種力量重塑：一邊是 Anthropic Fable 5 / Mythos 5 在政府審查後恢復部署，說明最強代理模型已經進入真實治理與出口管制邏輯；另一邊是 HealthAgentBench 這類任務型 benchmark 開始要求 agent 在真實多步驟環境中被量化。再加上 Anthropic Sonnet 5 的正式上線與 ZCode 3.0 + GLM-5.2 的社群熱度，今天的學習重點是把『更強 agent』翻譯成『可治理、可比較、可落地的 agent 系統』。",
      tags: ["Agent", "治理", "Benchmark", "AI FDE"],
      readingPath: [
        {
          label: "3 分鐘快讀",
          text: "先看 Fable 5 解禁、Sonnet 5、HealthAgentBench、ZCode 3.0 四個方向，抓住今天產品、治理與社群三條線。"
        },
        {
          label: "10 分鐘深讀",
          text: "把今天主軸理解成一個轉折：frontier agent 已經不能只靠 demo 或 benchmark 排名說服企業，而要同時回答安全審查、領域任務成功率與部署方式。"
        },
        {
          label: "今日練習",
          text: "設計一份企業版 agent deployment gate：列出允許上線前必須通過的任務成功率、人工覆核點、風險分類與回退條件。"
        }
      ],
      lifeOS: [
        {
          label: "人生方向",
          text: "把 agent 新聞轉成『企業如何安全上線』與『我如何設計可驗收系統』的能力，而不是只追模型名詞。"
        },
        {
          label: "今日產出",
          text: "完成一頁 frontier agent deployment gate 草圖，包含任務型 eval、權限邊界、人工核准與回退策略。"
        },
        {
          label: "能力焦點",
          text: "agent 治理、任務型評估設計、供應商選型、企業導入敘事。"
        },
        {
          label: "下一步",
          text: "用 Codex Pro 做成可展示的 eval dashboard 或 deployment checklist demo。"
        }
      ],
      signals: [
        {
          type: "官方/產品",
          priority: "觀察",
          title: "Codex / Hermes 近 24 小時未見值得單獨成篇的公開更新",
          text: "今天先檢查 Codex 與 Hermes 相關公開更新，近 24 小時沒有新的官方功能、版本或能力公告強到需要獨立成篇。",
          why: "這代表今天更值得把注意力放在『agent 如何被治理與驗證』這條更大的產業主線，而不是勉強追不存在的官方快訊。",
          learningPoint: "每日學習不只要找新功能，也要判斷今天真正改變產業的是功能、政策、還是評估框架。",
          sources: [
            {
              label: "Phoebe AI Learning",
              kind: "站內",
              url: "https://zzzzzzzzzzphoebe.github.io/phoebe-ai-learning/"
            }
          ]
        },
        {
          type: "治理/產品",
          priority: "高",
          title: "Anthropic Fable 5 與 Mythos 5 在美國政府審查後恢復部署",
          text: "Anthropic 最強公開模型 Fable 5 與更高階的 Mythos 5，在出口管制與安全爭議後於 2026-07-01 開始恢復存取，顯示 frontier agent 的部署已經進入真實政府審查流程。",
          why: "這不是單一公司的風波，而是市場開始接受一件事：最強 agent 的可用性，可能取決於安全等級、國別限制、驗證流程與政府關係，而不是單純 API 是否發布。",
          learningPoint: "AI FDE 在選型時要新增一層問題：模型是否可穩定供應、是否受政策限制、以及限制條件會不會直接改變產品設計。",
          sources: [
            {
              label: "The Guardian",
              kind: "媒體",
              url: "https://www.theguardian.com/technology/2026/jul/01/anthropic-fable-mythos-ai-models-us-export-controls-lifted"
            },
            {
              label: "Business Insider",
              kind: "媒體",
              url: "https://www.businessinsider.com/anthropic-restores-fable-5-mythos-access-trump-white-house-talks-2026-6"
            }
          ]
        },
        {
          type: "官方/產品",
          priority: "高",
          title: "Claude Sonnet 5 把 agentic 能力往更便宜、更普及的預設層推進",
          text: "Anthropic 在 2026-06-30 推出 Claude Sonnet 5，強調它是最具 agentic 能力的 Sonnet，能規劃、用工具、長步驟完成任務，並直接成為所有 Claude 方案的預設模型。",
          why: "這意味著 agent 能力不再只屬於最昂貴的旗艦模型，而是開始下放到更容易被大量採用的成本帶。",
          learningPoint: "真正要追的不是『哪家又變強』，而是『哪種能力開始進入預設工作流與主流價格帶』。",
          sources: [
            {
              label: "Anthropic announcement",
              kind: "官方",
              url: "https://www.anthropic.com/news/claude-sonnet-5"
            },
            {
              label: "Claude Code overview",
              kind: "官方文件",
              url: "https://docs.anthropic.com/en/docs/claude-code/overview"
            }
          ]
        },
        {
          type: "研究/Benchmark",
          priority: "高",
          title: "HealthAgentBench 把 frontier agent 拉進真實醫療工作流評估",
          text: "Microsoft 研究團隊在 2026-06-30 提出 HealthAgentBench，用 54 個醫療 agent 任務、7 種場景與端到端環境測試 frontier agents，結果顯示最強且最具成本效益的 agent 也只有約 42% 成功率。",
          why: "這提醒大家：agent 很會 demo，不代表已經能在高風險真實領域穩定工作；企業需要的是任務成功率與失敗分布，而不是單次驚艷案例。",
          learningPoint: "做企業導入時，要優先建立自己的 task-based eval，而不是只引用通用 benchmark 或供應商簡報。",
          sources: [
            {
              label: "HealthAgentBench paper",
              kind: "論文",
              url: "https://arxiv.org/abs/2606.31179"
            },
            {
              label: "HealthAgentBench GitHub",
              kind: "GitHub",
              url: "https://github.com/microsoft/HealthAgentBench"
            }
          ]
        },
        {
          type: "全球社群/工具",
          priority: "中高",
          title: "ZCode 3.0 + GLM-5.2 登上 Hacker News，開放陣營開始複製 Claude Code 體驗",
          text: "ZCode 3.0 主打深度適配 GLM-5.2 與多 agent 協作，並在 2026-07-01 登上 Hacker News 首位，顯示社群正積極追逐『像 Claude Code 一樣能工作的本地或替代型 coding agent 體驗』。",
          why: "這代表 agent 工具的競爭不只在模型 API，而是整個產品層：工作區、任務流、技能、長任務控制與本地開發感受。",
          learningPoint: "看 AI coding 工具時，不要只比模型分數；要看它是否把規劃、執行、回報、回退與環境控制做成一個完整產品。",
          sources: [
            {
              label: "ZCode official site",
              kind: "官方",
              url: "https://zcode.z.ai/cn"
            },
            {
              label: "Hacker News discussion",
              kind: "社群",
              url: "https://news.ycombinator.com/item?id=48751752"
            }
          ]
        }
      ],
      deepDive: {
        context:
          "今天真正值得學的，不是又多了一個模型名稱，而是 frontier agent 的兩個現實門檻正在變硬：第一個是部署治理，第二個是任務型驗證。Anthropic Fable 5 / Mythos 5 的恢復部署說明，最強模型的可用性可能被政策、出口管制與安全分級直接影響；HealthAgentBench 則說明，就算是最強 agent，到了高風險、長步驟、環境複雜的任務裡，成功率依然遠未到『放心上線』。",
        whyNow:
          "時間點很關鍵。2026-07-01 同時出現解禁、正式上線、社群追逐替代型 coding agent、以及新 benchmark 壓力，代表 agent 市場正在從『發表能力』過渡到『證明可部署』。接下來企業不只會問哪家最強，還會問能不能持續供應、是否受限制、在我這類任務上的成功率是多少。",
        technicalBackground:
          "agent 系統要真正可交付，至少要回答四件事：它能否在多步驟環境中維持狀態與計畫；它如何使用工具與處理失敗；它的任務成功率如何按場景量化；以及在高風險能力上有沒有分級、限流、審查與回退機制。這使得 agent 評估不再只是 benchmark score，而更接近一套 deployment gate：資料、工具、權限、trace、人工覆核與風險路由。",
        enterpriseImpact:
          "對企業導入來說，這直接改變採購與 PoC 方法。FDE 應該把需求從『幫我選最好的模型』轉成『幫我定義上線門檻』：哪些任務能先上、哪些要人工核准、哪些能力需要風險分級、哪些模型在政策或供應上有不確定性。這種表達比單純報模型名次更接近真正能成交與能落地的顧問能力。",
        watchNext:
          "接下來最值得追的三件事：第一，更多 frontier 模型會不會出現類似的分級供應與政策限制；第二，像 HealthAgentBench 這種領域 benchmark 會不會擴散到金融、客服、法務與內部知識工作；第三，開放或替代型 coding agent 產品能不能在工作流完整度上快速追近 Claude Code / Codex 這種體驗。"
      },
      toolUseRadar: [
        {
          tool: "Codex",
          pattern: "把 agent 部署問題轉成可驗收的 repo 與 dashboard 產出",
          examples: [
            "先定義一個 deployment gate schema，再讓 Codex 產出靜態 dashboard、mock data 與說明文件。",
            "把 repo 級任務設成讀碼、改檔、檢查、人工核准、回退五段，留下可追蹤的 diff 與檢查結果。",
            "用 Codex 處理多檔案整理、測試補強與 demo 製作，讓學習內容變成作品集。"
          ],
          learningPoint: "Codex 最值得拿來做的，不是一次性問答，而是把抽象概念落成可展示的工程資產。",
          sources: [
            {
              label: "OpenAI Codex",
              kind: "官方",
              url: "https://openai.com/codex/"
            },
            {
              label: "Codex pricing",
              kind: "官方",
              url: "https://developers.openai.com/codex/pricing"
            }
          ]
        },
        {
          tool: "Hermes / Phoebe",
          pattern: "把公開研究掃描、網站更新、寄信與記憶管理串成個人 AI 作業系統",
          examples: [
            "每日先判斷今天是產品發布日、治理事件日、還是 benchmark 更新日，再選主軸。",
            "把網站 entry、weekly 回顧、Gmail 摘要與 automation memory 一次更新，維持長期一致性。",
            "用 public-safe workflow 把研究信號轉成可展示的學習資產，而不是只留在聊天紀錄。"
          ],
          learningPoint: "Hermes / Phoebe 的價值在於把『每天知道很多』變成『每天累積一個可回看的系統』。",
          sources: [
            {
              label: "Phoebe AI Learning",
              kind: "站內",
              url: "https://zzzzzzzzzzphoebe.github.io/phoebe-ai-learning/"
            }
          ]
        },
        {
          tool: "Claude",
          pattern: "把 Sonnet 5 當成較低成本的 agentic execution layer，但敏感任務仍需分級",
          examples: [
            "在多檔案修改、文件整理、一般 automation 任務上用 Sonnet 5 取得較高性價比。",
            "對於涉入敏感 cyber 或高風險能力的工作流，先設計路由與人工審查，不假設所有任務都能直接交給同一個模型。",
            "比較 Sonnet 類預設模型與更高階模型在任務完成率、成本與限制條件上的差異。"
          ],
          learningPoint: "模型分級不只是價格差異，也反映可部署範圍與風險控制策略。",
          sources: [
            {
              label: "Anthropic announcement",
              kind: "官方",
              url: "https://www.anthropic.com/news/claude-sonnet-5"
            },
            {
              label: "The Guardian",
              kind: "媒體",
              url: "https://www.theguardian.com/technology/2026/jul/01/anthropic-fable-mythos-ai-models-us-export-controls-lifted"
            }
          ]
        },
        {
          tool: "其他 AI 工具",
          pattern: "同時追蹤替代型 coding agent 與領域 benchmark，建立多供應商視角",
          examples: [
            "研究 ZCode 3.0 這類產品如何把 GLM-5.2 包裝成接近 Claude Code 的工作流體驗。",
            "用 HealthAgentBench 這類研究，學會怎麼設計屬於自己產業的 task-based eval。",
            "把 open-source 或區域型工具當成比較基準，而不是只看單一美系供應商。"
          ],
          learningPoint: "AI 工具鏈的成熟度，取決於產品層與評估層是否一起跟上，而不是模型名稱是否最新。",
          sources: [
            {
              label: "ZCode official site",
              kind: "官方",
              url: "https://zcode.z.ai/cn"
            },
            {
              label: "HealthAgentBench paper",
              kind: "論文",
              url: "https://arxiv.org/abs/2606.31179"
            }
          ]
        }
      ],
      quotaStrategy: {
        principle:
          "Codex Pro 額度應優先花在能把 agent 治理與評估概念變成公開作品的任務，而不是只追更多新聞摘要。今天最值得做的是 deployment gate、task-based eval dashboard、供應商比較頁這類會留下長期資產的東西。",
        bestProjects: [
          "Frontier Agent Deployment Gate：做一個可視化上線檢查表，展示任務成功率、權限分級、人工覆核與回退條件。",
          "Task-based Eval Dashboard：把特定領域任務拆成 accuracy、success rate、latency、cost、risk 五個面向，做成面試級作品。",
          "Multi-vendor Agent Comparison：比較 Codex、Claude、ZCode / GLM 類工具在工作流完整度、治理能力與成本上的差異。",
          "既有學習站升級：把 daily entry、weekly 回顧、搜尋與專案池做成更像個人研究情報台。"
        ],
        weeklyPlan: [
          "50% 額度投入可公開展示的長期資產：dashboard、demo、比較頁、學習站。",
          "30% 額度投入 repo 級工程任務：修整結構、補檢查、改善資料模型與內容生產流程。",
          "20% 額度投入研究驗證：追 benchmark、官方公告、社群新工具，並整理成可執行假設。"
        ],
        avoid: [
          "不要把主要額度花在追逐每一則新聞或重複摘要同一件事。",
          "不要先做大而空的 agent 產品；先做 deployment gate、eval、checklist 這種可驗證部件。",
          "不要只比較模型輸出好不好看；要留下任務指標、流程設計與可展示成果。"
        ],
        sources: [
          {
            label: "OpenAI Codex",
            kind: "官方",
            url: "https://openai.com/codex/"
          },
          {
            label: "Codex pricing",
            kind: "官方",
            url: "https://developers.openai.com/codex/pricing"
          }
        ]
      },
      projectPipeline: [
        {
          priority: "本週優先",
          title: "Frontier Agent Deployment Gate Dashboard",
          value: "把今天的治理主軸變成一個可展示作品：用表格與圖示定義哪些 agent 任務可上線、哪些需要人工核准。",
          codexTask: "請 Codex 建一個 public-safe 單頁 dashboard，包含任務分類、風險等級、成功率門檻、人工覆核與回退規則。",
          asset: "AI FDE 治理與導入作品頁",
          nextStep: "先做靜態版資料模型與 UI，再補情境案例"
        },
        {
          priority: "能力累積",
          title: "Task-based Agent Eval Pack",
          value: "把 HealthAgentBench 的思路移植到泛化的企業場景，練習怎麼設計自己的任務型評估框架。",
          codexTask: "讓 Codex 產生 eval schema、假資料、指標定義與結果解讀模版。",
          asset: "AI FDE 評估方法作品",
          nextStep: "先用客服、文件摘要、知識問答三種任務做第一版"
        },
        {
          priority: "長期資產",
          title: "Personal AI Learning Operating System",
          value: "持續把世界 AI 訊號轉成可展示能力、專案候選與職涯敘事，而不是散落在聊天紀錄。",
          codexTask: "持續優化 Phoebe AI Learning 的 weekly 回顧、專案池、搜尋與資料結構。",
          asset: "個人 AI 學習作戰室",
          nextStep: "把 deployment gate 類作品加入專案池，形成週節奏"
        }
      ],
      capabilityFlywheel: [
        {
          skill: "研究判讀",
          practice: "每天把產品發布、治理事件、社群熱點與 benchmark 分開判讀，再整合成主軸。",
          evidence: "網站上的全球 AI 雷達與來源連結"
        },
        {
          skill: "系統設計",
          practice: "把 agent 能不能上線，拆成權限、風險分級、eval、人工覆核與回退設計。",
          evidence: "今日 deployment gate 練習與專案候選池"
        },
        {
          skill: "工程落地",
          practice: "用 Codex Pro 把治理與評估概念做成 dashboard、demo 與可展示頁面。",
          evidence: "GitHub Pages、commit、靜態 dashboard 或互動 prototype"
        },
        {
          skill: "專業表達",
          practice: "把模型治理與任務成功率翻譯成企業導入語言與面試可用表述。",
          evidence: "重要名詞、FDE 練習、weekly 回顧"
        }
      ],
      debate: [
        {
          label: "支持觀點",
          text: "如果 frontier agent 能被分級治理、且能用真實任務 benchmark 驗證，企業反而更有可能放心導入，而不是永遠停留在概念驗證。"
        },
        {
          label: "疑慮風險",
          text: "若模型供應受政策限制、benchmark 與真實任務脫節，或工具產品只做出漂亮 demo，企業仍可能高估 agent 的可部署性。"
        },
        {
          label: "後續追蹤",
          text: "接下來值得觀察的是：哪些供應商會把上線條件、風險路由與任務成功率講得更透明，以及哪些領域會最先出現自己的 agent benchmark。"
        }
      ],
      term: {
        name: "Deployment Gate",
        definition:
          "Deployment gate 是一套在 AI agent 正式上線前必須通過的條件組合，通常包含任務成功率、風險分級、人工覆核、權限邊界與回退策略。",
        example: "例如企業可以規定：只有在文件摘要任務成功率超過 92%、敏感欄位有人工複核、失敗能回退到人工流程時，agent 才能正式進 production。",
        misunderstanding: "Deployment gate 不是單純的法務簽核；它應該是可被量化、可重跑驗證、可持續更新的技術與流程門檻。"
      },
      fde: {
        scenario: "客戶想把 frontier agent 接進內部工作流，但擔心模型供應受政策影響、某些高風險能力無法穩定開放，且缺少任務成功率數據。",
        questions: [
          "哪些任務可以先從低風險、可回退、容易量化的流程開始？",
          "需要哪些 deployment gate 條件，才能讓業務、法遵與 IT 同時接受？",
          "如果供應商限制突然改變，是否有替代模型、降級流程或人工接手方案？"
        ],
        exercise: "畫出一個 agent deployment gate，至少列出任務成功率門檻、人工覆核點、風險分級與回退機制。",
        interview: "我不會只推薦最強模型，而會先幫客戶定義 deployment gate，確保 agent 的能力、供應穩定性與治理條件一起被驗證。"
      }
    },
    {
      id: "2026-07-01",
      date: "2026-07-01",
      title: "Claude Sonnet 5 把 AI coding 拉進長流程工程化競爭",
      topic: "AI Coding",
      impact: "高",
      memory: "今天要記住：新一代 coding 模型的競爭，已經不只是寫得更快，而是能不能在長流程任務中維持可控、可驗收、可治理。",
      status: "未讀",
      summary:
        "2026-06-30 最值得深讀的公開更新，是 Anthropic 正式推出 Claude Sonnet 5。這件事重要，不只是因為模型變強，而是官方訊息、Claude Code 實務脈絡與 HN 社群反應都在指向同一個方向：AI coding 正在往長流程任務、checkpoint、可回退與可治理工程化前進。同一天，Google 也把 Gemini 2.5 Flash-Lite Image 推到更輕量的多模態工作流，開源社群則由 Qwen-AgentWorld 與 GLM-5.2 持續推高 agent 與本地模型熱度。",
      tags: ["AI Coding", "Agent", "Claude", "AI FDE"],
      readingPath: [
        {
          label: "3 分鐘快讀",
          text: "先看 Claude Sonnet 5、Gemini 2.5 Flash-Lite Image、Qwen-AgentWorld、GLM-5.2 這四個方向，快速抓住今天的產品與開源重點。"
        },
        {
          label: "10 分鐘深讀",
          text: "把 Claude Sonnet 5 當成一個訊號：AI coding 的真正差異點，正在從單次補全，轉向長流程任務中的 checkpoint、差異整理、可回退與驗收機制。"
        },
        {
          label: "今日練習",
          text: "設計一個 coding agent workflow，至少包含需求解析、改檔、檢查、人工核准、失敗回退五段，並定義每段的驗收訊號。"
        }
      ],
      lifeOS: [
        {
          label: "人生方向",
          text: "把 AI coding 的變化轉成 AI FDE 能力、作品集與可面試表述，而不是只追逐模型新聞。"
        },
        {
          label: "今日產出",
          text: "完成一個 checkpointed coding agent workflow 草圖，明確標示驗收、回退與人工核准。"
        },
        {
          label: "能力焦點",
          text: "長流程 agent 設計、成本治理、工程驗收、企業導入風險說明。"
        },
        {
          label: "下一步",
          text: "用 Codex Pro 把 workflow 做成可展示的互動 demo 或評估 dashboard。"
        }
      ],
      signals: [
        {
          type: "官方/產品",
          priority: "觀察",
          title: "Codex / Hermes 近 24 小時未見值得單獨成篇的公開更新",
          text: "今天先檢查 Codex 與 Hermes 相關公開更新，近 24 小時沒有新的官方功能、版本或能力公告強到需要獨立成篇。",
          why: "這讓今天更適合把重點放在公開可驗證、且已開始被社群大規模討論的 AI coding 主線，而不是硬追不存在的官方快訊。",
          learningPoint: "每日學習先判斷今天是『產品發布日』還是『實務脈絡成形日』，兩者的讀法不同。",
          sources: [
            {
              label: "Phoebe AI Learning",
              kind: "站內",
              url: "https://zzzzzzzzzzphoebe.github.io/phoebe-ai-learning/"
            }
          ]
        },
        {
          type: "官方/產品",
          priority: "高",
          title: "Anthropic 在 2026-06-30 推出 Claude Sonnet 5",
          text: "Anthropic 正式發布 Claude Sonnet 5，主打更好的 coding 表現，並把長流程工作中的 checkpoint、恢復與穩定性放到更前面的位置。",
          why: "這不是單純模型升級，而是在告訴市場：企業真正願意付費的是可持續工作的 coding agent，而不是只會一次產生程式碼的聊天模型。",
          learningPoint: "看 AI coding 更新時，要特別注意模型能力之外的流程性訊號，例如 checkpoint、恢復、差異管理與長任務可靠性。",
          sources: [
            {
              label: "Anthropic announcement",
              kind: "官方",
              url: "https://www.anthropic.com/news/claude-sonnet-5"
            },
            {
              label: "Claude Code overview",
              kind: "官方文件",
              url: "https://docs.anthropic.com/en/docs/claude-code/overview"
            }
          ]
        },
        {
          type: "官方/多模態",
          priority: "中高",
          title: "Google 推進 Gemini 2.5 Flash-Lite Image，讓輕量模型也能進入多模態工作流",
          text: "Google DeepMind 把 Gemini 2.5 Flash-Lite Image 推向更便宜、反應更快的圖片生成與編輯場景，代表多模態能力正往更大眾、更可嵌入流程的方向走。",
          why: "企業導入 AI 時，未必每一步都需要最強模型；更常見的是把較輕量模型接進客服、內部工具、內容製作或文件處理流程。",
          learningPoint: "AI FDE 需要學會分層選模：高價前沿模型負責高價值推理，輕量模型負責大量、可模板化的工作流步驟。",
          sources: [
            {
              label: "Gemini 2.5 Flash-Lite Image",
              kind: "官方",
              url: "https://deepmind.google/models/gemini-image/flash-lite/"
            }
          ]
        },
        {
          type: "研究/開源",
          priority: "中高",
          title: "Qwen-AgentWorld 把語言世界模型推向可執行代理場景",
          text: "Qwen 團隊公開 Qwen-AgentWorld 的論文與 GitHub repo，把可模擬、多步驟、可與環境互動的 language world model 往 agent 實作再推進一步。",
          why: "這條線的重要性在於，未來 agent 不只靠 prompt chaining，而可能需要更強的環境建模、記憶與行動規劃能力。",
          learningPoint: "讀 agent 研究時，要開始留意『環境建模』與『多步驟世界狀態』，而不是只看單輪 benchmark。",
          sources: [
            {
              label: "Qwen-AgentWorld paper",
              kind: "論文",
              url: "https://arxiv.org/abs/2506.20739"
            },
            {
              label: "Qwen-AgentWorld GitHub",
              kind: "GitHub",
              url: "https://github.com/QwenLM/Qwen-AgentWorld"
            }
          ]
        },
        {
          type: "全球社群/開源",
          priority: "中",
          title: "Hugging Face 社群持續追高 GLM-5.2 這類開放 agent 模型",
          text: "Hugging Face 熱門討論中，GLM-5.2 被視為新一波可本地實驗的 agent 模型代表，顯示社群仍高度關注開放模型在 reasoning、工具使用與本機工作流中的可行性。",
          why: "這代表企業與個人開發者都在找一條不完全依賴閉源前沿模型的路，尤其是在成本、部署彈性與資料控制上。",
          learningPoint: "不要只追 frontier API，也要追蹤哪些開放模型開始具備可做 workflow eval 的能力。",
          sources: [
            {
              label: "Hugging Face GLM-5.2 post",
              kind: "社群",
              url: "https://huggingface.co/posts/gnokit/804411866862303"
            }
          ]
        }
      ],
      deepDive: {
        context:
          "Claude Sonnet 5 的意義，不在於又多了一個更強模型名稱，而在於它把 AI coding 的評比標準往更完整的工作流程推進。從 repo 理解、長時間任務、checkpoint、失敗恢復，到最後的可驗收 diff，這些都比單次補全更接近企業真實需求。",
        whyNow:
          "時間點很關鍵：2026-06-30 正好是 AI coding 平台競爭快速升溫的階段，市場已經不再滿足於『能寫出一段程式碼』。官方發布與社群回響同時聚焦在工作流可靠性，說明產業正在把 coding agent 當成工程系統，而不是玩具。",
        technicalBackground:
          "長流程 coding agent 需要的不只是模型推理能力，還包括任務切分、檔案狀態理解、工具呼叫、checkpoint、重試策略、測試回饋、差異比較與人工審查節點。若缺少這些機制，模型即使在 benchmark 上更強，也很難穩定交付真實任務。",
        enterpriseImpact:
          "對企業導入來說，這意味著選型標準應該升級。FDE 不該只談模型分數，而要定義可治理指標，例如長任務完成率、平均人工接手次數、測試通過率、回退成功率、token 成本上限、以及是否能留下完整稽核軌跡。",
        watchNext:
          "接下來最值得追的是三件事：第一，Claude Sonnet 5 與其他 coding agent 平台會不會更公開地談 eval 與 cost guardrails；第二，開放模型是否能在長流程 coding 任務接近閉源體驗；第三，企業是否開始把 coding agent 導入規格寫進內部 SDLC 與資安治理流程。"
      },
      toolUseRadar: [
        {
          tool: "Codex",
          pattern: "把 repo 級工作做成有驗收門檻的長流程任務",
          examples: [
            "先讀 AGENTS.md、git status、現有測試與錯誤訊號，再決定修改範圍與風險。",
            "把修 bug、補測試、更新文件、整理 commit 與部署前檢查串成一個可重跑流程。",
            "要求每次任務留下 diff、檢查結果與待人工確認事項，而不是只追求一次回覆很漂亮。"
          ],
          learningPoint: "Codex 最值得學的是如何把代理輸出變成可驗收的工程成果。",
          sources: [
            {
              label: "OpenAI Codex",
              kind: "官方",
              url: "https://openai.com/codex/"
            },
            {
              label: "Codex pricing",
              kind: "官方",
              url: "https://developers.openai.com/codex/pricing"
            }
          ]
        },
        {
          tool: "Hermes / Phoebe",
          pattern: "把每日研究、內容維護、寄信與記憶管理串成個人作業系統",
          examples: [
            "固定掃描公開 AI 更新，整理成站內 entry、weekly 回顧與 Gmail 短提醒。",
            "用 sidecar memory 保留前一次主題、寄送結果、GitHub Pages 狀態與個人偏好。",
            "把公開學習站、長期工作區與 automation 串起來，減少每天重複交代背景。"
          ],
          learningPoint: "Hermes / Phoebe 類工具的價值，在於把個人工作流變成可持續維護的系統。",
          sources: [
            {
              label: "Phoebe AI Learning",
              kind: "站內",
              url: "https://zzzzzzzzzzphoebe.github.io/phoebe-ai-learning/"
            }
          ]
        },
        {
          tool: "Claude",
          pattern: "用更穩定的長流程 coding agent 處理多檔案修改與長任務",
          examples: [
            "讓 agent 先理解 codebase，再分段完成修改、測試、回報與必要回退。",
            "把 checkpoint 與人工審查節點設計進工作流，避免長任務失控後難以追回。",
            "在需要長時間閱讀 repo、整理多步驟差異時，把模型能力和流程能力一起評估。"
          ],
          learningPoint: "Claude Sonnet 5 帶來的核心學習點，是 coding agent 的可靠性設計，而不只是模型名稱更新。",
          sources: [
            {
              label: "Anthropic announcement",
              kind: "官方",
              url: "https://www.anthropic.com/news/claude-sonnet-5"
            },
            {
              label: "Claude Code overview",
              kind: "官方文件",
              url: "https://docs.anthropic.com/en/docs/claude-code/overview"
            }
          ]
        },
        {
          tool: "其他 AI 工具",
          pattern: "前沿閉源模型與開放模型分工，形成多層次工作流",
          examples: [
            "用 Claude / Codex 處理高風險 repo 任務，用 GLM-5.2 或其他開放模型做本地實驗與 eval。",
            "用 Gemini 2.5 Flash-Lite Image 做文件圖示、流程圖草稿或內容生成的輕量步驟。",
            "追蹤 Qwen-AgentWorld 這類 repo，理解未來 agent 會如何結合世界模型、環境記憶與規劃。"
          ],
          learningPoint: "真正可落地的 AI 工具鏈，通常不是單一模型包辦，而是按成本、風險與任務分層。",
          sources: [
            {
              label: "Gemini 2.5 Flash-Lite Image",
              kind: "官方",
              url: "https://deepmind.google/models/gemini-image/flash-lite/"
            },
            {
              label: "Qwen-AgentWorld GitHub",
              kind: "GitHub",
              url: "https://github.com/QwenLM/Qwen-AgentWorld"
            }
          ]
        }
      ],
      quotaStrategy: {
        principle:
          "Codex Pro 額度應優先花在會留下長期資產、而且需要讀 repo、改檔、驗收與重跑的任務。今天的重點不是多問幾次模型，而是用額度建立可重複的 coding workflow、作品集與評估機制。",
        bestProjects: [
          "AI coding workflow demo：做一個有需求解析、改檔、測試、人工核准、回退機制的公開示範。",
          "AI FDE 作品集：建立 3-5 個可部署成果，例如 RAG demo、agentic coding dashboard、evaluation harness、成本監控頁。",
          "既有 repo 深度整理：讓 Codex 讀完整專案、補測試、寫文件、重構模組與整理部署流程。",
          "長期自動化資產：把每日研究、網站更新、寄信、摘要整理做成可持續維護的 workflow。"
        ],
        weeklyPlan: [
          "55% 額度投入可公開展示的長期資產：網站、工具、demo、dashboard。",
          "25% 額度投入 repo 級維護：修 bug、補測試、重構、文件與 code review。",
          "20% 額度投入研究驗證：追蹤公開更新、比較工作流、建立小型 eval 與成本估算。"
        ],
        avoid: [
          "不要把主要額度浪費在短問答、一次性改寫或純聊天探索。",
          "不要在沒有驗收標準時就讓 agent 大改 repo；先定義檢查點與回退方案。",
          "不要只累積很多輸出文字；要優先留下 commit、站點更新、測試結果、報表或可重跑腳本。"
        ],
        sources: [
          {
            label: "OpenAI Codex",
            kind: "官方",
            url: "https://openai.com/codex/"
          },
          {
            label: "Codex pricing",
            kind: "官方",
            url: "https://developers.openai.com/codex/pricing"
          }
        ]
      },
      projectPipeline: [
        {
          priority: "本週優先",
          title: "Checkpointed Coding Agent Demo",
          value: "把今天的 Claude Sonnet 5 主題轉成作品集：展示一個 coding agent 如何分段改檔、檢查、回退與等待人工核准。",
          codexTask: "請 Codex 建一個靜態互動流程圖，資料用 public-safe mock，呈現需求解析、改檔、測試、核准、回退。",
          asset: "可放到 GitHub Pages 的 AI FDE demo 頁",
          nextStep: "先做單頁 prototype，再加上測試紀錄與面試說明"
        },
        {
          priority: "能力累積",
          title: "AI Coding Evaluation Dashboard",
          value: "把模型能力討論轉成企業會買單的指標：長任務完成率、人工接手次數、測試通過率、token 成本與回退成功率。",
          codexTask: "讓 Codex 產生 dashboard schema、假資料、圖表與評估說明，先做靜態版。",
          asset: "AI FDE 評估方法作品",
          nextStep: "用今天的 workflow 指標當第一版資料模型"
        },
        {
          priority: "長期資產",
          title: "Personal AI Learning Operating System",
          value: "把每日學習站升級成長期能力系統：每天輸入世界訊號，輸出專案、練習、能力證據與週回顧。",
          codexTask: "持續優化 Phoebe AI Learning 的資料結構、搜尋、專案池、週回顧與自動排程 prompt。",
          asset: "個人 AI 學習作戰室",
          nextStep: "把 projectPipeline 和 capabilityFlywheel 固定寫進每日排程"
        }
      ],
      capabilityFlywheel: [
        {
          skill: "研究判讀",
          practice: "每天把官方公告、社群討論、GitHub repo 與論文拆成主軸與多訊號。",
          evidence: "網站上的全球 AI 雷達與來源連結"
        },
        {
          skill: "系統設計",
          practice: "把 AI coding 事件轉成 workflow、checkpoint、回退、權限與驗收設計。",
          evidence: "今日 FDE 練習與專案候選池"
        },
        {
          skill: "工程落地",
          practice: "用 Codex Pro 建立可部署、可測試、可反覆改進的工具或 demo。",
          evidence: "GitHub Pages、commit、dashboard 或互動 prototype"
        },
        {
          skill: "專業表達",
          practice: "把每天學到的內容壓縮成面試可用語句與客戶導入說明。",
          evidence: "重要名詞、面試可用表述、週回顧"
        }
      ],
      debate: [
        {
          label: "支持觀點",
          text: "如果 coding agent 真的能在長流程任務中維持穩定與可回退，企業導入門檻會大幅下降，AI coding 也更可能成為正式開發基礎設施。"
        },
        {
          label: "疑慮風險",
          text: "模型能力再強，若缺少 checkpoint、審查節點、權限邊界與成本上限，長流程代理仍可能製造更高的工程與治理風險。"
        },
        {
          label: "後續追蹤",
          text: "接下來值得看的是：各家 AI coding 平台何時把長任務評估、成本 guardrails 與稽核紀錄變成標配，而不是高階使用者才會自己補。"
        }
      ],
      term: {
        name: "Checkpointed Coding Agent",
        definition:
          "Checkpointed coding agent 是指在長流程開發任務中，會保留中間狀態、允許回退、並在重要節點做檢查或人工核准的 AI coding 工作流。",
        example: "例如 agent 先讀 repo、修改三個檔案、跑測試，若第二步失敗就回到前一個 checkpoint，而不是整段流程全部重來。",
        misunderstanding: "Checkpoint 不是單純存對話記錄；真正重要的是能回到可工作的狀態，並讓人知道哪一步出了問題。"
      },
      fde: {
        scenario: "客戶想導入 AI coding 助理處理內部專案維護，但擔心長任務一旦失控，就會改壞多個檔案、難以追責且成本失控。",
        questions: [
          "哪些開發任務可以先限定在低風險、可重跑且可測試的範圍內？",
          "需要哪些 checkpoint、人工核准與回退機制，才能讓團隊敢正式使用？",
          "怎麼衡量長任務完成率、人工接手次數、token 成本與測試通過率？"
        ],
        exercise: "畫出一個企業版 coding agent workflow，標示每一段的權限、驗收標準、checkpoint 與失敗回退方式。",
        interview: "我不會只推薦哪個 coding 模型最強，而會先設計長流程任務的 checkpoint、驗收與治理機制，讓客戶能安全擴大使用。"
      }
    },
    {
      id: "2026-06-30",
      date: "2026-06-30",
      title: "Agentic coding 進入開源協作與本地開發加速期",
      topic: "Agentic Coding",
      impact: "中高",
      memory: "今天要記住：AI coding 的競爭焦點正從單一大模型能力，轉向多代理協作、可本地部署與可驗收的工程流程。",
      status: "未讀",
      summary:
        "近 24 小時沒有足夠強的新 Codex 或 Hermes 官方公開更新可單獨成篇，但 AI coding 的主題很明顯：使用量暴增、成本控管變嚴、agentic workflow 從 demo 走向可驗收工程。今天要同時看 GitHub Copilot 的商業訊號、開源 agent inference 系統、以及 agent harness 這類把流程寫進程式的研究路線。",
      tags: ["Agent", "開發工具", "開源", "AI FDE"],
      readingPath: [
        {
          label: "3 分鐘快讀",
          text: "先看全球 AI 重要訊號，掌握 GitHub Copilot 使用量與成本、ThunderAgent、LLM-as-Code、vLLM 這幾個方向。"
        },
        {
          label: "10 分鐘深讀",
          text: "理解 agentic coding 的重點不是只換更強模型，而是把控制流、成本、trace、驗收與回退變成工程流程。"
        },
        {
          label: "今日練習",
          text: "把一個 AI coding PoC 拆成需求解析、檔案修改、測試檢查、成本監控、人工覆核五個步驟。"
        }
      ],
      signals: [
        {
          type: "官方/產品",
          priority: "觀察",
          title: "Codex / Hermes 近 24 小時未見夠強的公開更新",
          text: "今天先檢查公開產品更新，沒有找到新的官方功能、版本或能力公告足以單獨成為主題。",
          why: "這代表今天更值得學的是 AI coding 產業與開源側正在形成的新實作方向，而不是追逐不存在的硬新聞。",
          learningPoint: "每天要先分清楚：官方產品更新、社群熱點、開源工具和研究脈絡不是同一種訊號。",
          sources: [
            {
              label: "Phoebe site context",
              kind: "內部紀錄",
              url: "https://zzzzzzzzzzphoebe.github.io/phoebe-ai-learning/"
            }
          ]
        },
        {
          type: "產業/商業",
          priority: "高",
          title: "AI coding 需求推高 GitHub 使用量",
          text: "GitHub 內部會議訊號顯示，Copilot 與 AI coding 需求帶動平台使用量創高；這也讓計費、容量與服務穩定性變成更重要的企業議題。",
          why: "AI coding 從個人效率工具變成企業基礎設施後，採購與導入不能只看功能，還要看用量、成本、SLA 與可治理性。",
          learningPoint: "當一個 AI 工具開始按用量計費，FDE 要能把技術價值翻成成本模型與使用規範。",
          sources: [
            {
              label: "Business Insider",
              kind: "媒體",
              url: "https://www.businessinsider.com/github-best-month-ever-internal-meeting-2026-6"
            },
            {
              label: "Copilot pricing reaction",
              kind: "媒體",
              url: "https://www.businessinsider.com/github-copilot-token-uage-pricing-change-reaction-2026-6"
            }
          ]
        },
        {
          type: "研究/開源",
          priority: "高",
          title: "ThunderAgent 把 agentic inference 當成可排程系統",
          text: "ThunderAgent 主張把 agentic workflow 抽象成 LLM Programs，讓推論引擎能理解 KV cache、工具環境與流程狀態，而不是把每次模型呼叫分開處理。",
          why: "這把 AI agent 的瓶頸從 prompt 轉到系統工程：排程、快取、工具資源、吞吐量與可重現部署。",
          learningPoint: "面對企業 agent 導入，要問的不只是模型準不準，還要問 serving 架構能不能支撐多步驟工作流。",
          sources: [
            {
              label: "arXiv",
              kind: "論文",
              url: "https://arxiv.org/abs/2602.13692"
            },
            {
              label: "GitHub Repo",
              kind: "GitHub",
              url: "https://github.com/ThunderAgent-org/ThunderAgent"
            }
          ]
        },
        {
          type: "研究/架構",
          priority: "中高",
          title: "LLM-as-Code 主張控制流回到程式",
          text: "LLM-as-Code / Agentic Programming 的核心觀點是：不要讓模型自己決定所有 loop、branch、stop；程式負責控制流，模型只在需要推理或生成時被呼叫。",
          why: "這對 AI FDE 很重要，因為企業最怕的是不可預測、不可重現、不可驗收；把控制流寫成程式能降低這些風險。",
          learningPoint: "設計 agent 時，可以把模型當成能力元件，而不是把整個流程都交給模型自由發揮。",
          sources: [
            {
              label: "arXiv",
              kind: "論文",
              url: "https://arxiv.org/abs/2606.15874"
            }
          ]
        },
        {
          type: "開源工具",
          priority: "中",
          title: "vLLM 代表推論基礎設施成為 agent 方案底座",
          text: "vLLM 生態提醒我們，高吞吐、低延遲、批次化、KV cache 管理與 OpenAI-compatible API，是多 agent / coding agent 成本控制的底層能力。",
          why: "如果客戶要把 agentic coding 擴到團隊層級，推論服務與成本控管會比單次 demo 更重要。",
          learningPoint: "評估 agent 平台時，要同時看 model、orchestration、serving、observability 四層。",
          sources: [
            {
              label: "vLLM GitHub",
              kind: "GitHub",
              url: "https://github.com/vllm-project/vllm"
            },
            {
              label: "vLLM project",
              kind: "官方",
              url: "https://vllm.ai"
            }
          ]
        }
      ],
      deepDive: {
        context:
          "AI coding 正在從早期的「問模型幫我寫一段程式」，走向能讀 repo、改檔、執行檢查、重試、整理差異、甚至多代理協作的工作流。這讓企業看到效率，也讓成本、穩定性與責任邊界變得更嚴肅。",
        whyNow:
          "GitHub Copilot 使用量上升與 usage-based pricing 討論，說明 AI coding 已經變成真實成本中心；同時 ThunderAgent、LLM-as-Code 等研究把焦點放到 agentic workflow 的控制與部署，代表社群正在補工程化缺口。",
        technicalBackground:
          "傳統 chat-based coding 主要依賴單次上下文與模型能力；agentic coding 則需要任務規劃、工具呼叫、檔案狀態、測試回饋、trace、回退方案。當代理流程變長，控制流是否由模型自由決定，或由程式明確編排，就會直接影響可靠性。",
        enterpriseImpact:
          "企業導入時，FDE 必須把「提高開發效率」拆成可衡量指標：任務完成率、人工覆核時間、測試通過率、每次任務 token 成本、失敗回退成本、資料外洩風險與稽核紀錄。",
        watchNext:
          "接下來要追蹤三件事：AI coding 平台如何提供成本上限與 usage analytics；開源 agent 框架是否開始內建 trace/eval；推論引擎是否更懂 agent workflow，而不只是服務單次 prompt。"
      },
      toolUseRadar: [
        {
          tool: "Codex",
          pattern: "把 repo 級任務交給 agent 做到可驗收",
          examples: [
            "修 bug 前先讀 AGENTS.md、git status、測試與錯誤 log，再提出最小修改。",
            "把重複流程做成每日排程、靜態網站、報表或可重跑腳本。",
            "做 code review、測試補洞、文件更新、PR 摘要與部署前檢查。"
          ],
          learningPoint: "Codex 的價值在長流程與可驗證成果，不在一次問答。",
          sources: [
            {
              label: "OpenAI Codex",
              kind: "官方",
              url: "https://openai.com/codex/"
            },
            {
              label: "Codex pricing",
              kind: "官方",
              url: "https://developers.openai.com/codex/pricing"
            }
          ]
        },
        {
          tool: "Hermes / Phoebe",
          pattern: "把本機工作流變成可維護的個人系統",
          examples: [
            "整理每日 AI 學習網站、排程、寄信、sidecar memory 與 GitHub Pages 發布狀態。",
            "連接本機檔案、長期 workspace、工具入口與個人偏好，減少每天重新說明。",
            "把零散任務沉澱成可追蹤的工作區、專案索引與自動化紀錄。"
          ],
          learningPoint: "Hermes 類工具最適合做個人作業系統：記住脈絡、維護流程、幫你收斂輸出。",
          sources: [
            {
              label: "Phoebe AI Learning",
              kind: "站內",
              url: "https://zzzzzzzzzzphoebe.github.io/phoebe-ai-learning/"
            }
          ]
        },
        {
          tool: "Claude Code",
          pattern: "用對話式 coding agent 處理大型修改與理解陌生 codebase",
          examples: [
            "請 agent 解釋架構、定位 bug、修改多檔案並跑測試。",
            "把自然語言需求轉成可審查的 diff，而不是只產生片段程式碼。",
            "用在重構、測試、文件與資料處理腳本這類需要讀上下文的任務。"
          ],
          learningPoint: "Claude Code 的學習重點是 prompt less, inspect more：讓 agent 先讀環境，再動手改。",
          sources: [
            {
              label: "Claude Code overview",
              kind: "官方",
              url: "https://docs.anthropic.com/en/docs/claude-code/overview"
            }
          ]
        },
        {
          tool: "其他 AI 工具",
          pattern: "把 AI 拆成研究、寫作、設計、資料與開發的專門工具鏈",
          examples: [
            "GitHub Copilot 偏向 IDE 內即時補全、聊天與日常 coding 輔助。",
            "Perplexity / ChatGPT Deep Research 類工具適合做有來源的快速研究起點。",
            "vLLM、local model 與開源 agent repo 適合用來理解成本、部署與可控性。"
          ],
          learningPoint: "不要只比較模型名，應該比較任務：研究、開發、整理、部署、驗收各自需要不同工具。",
          sources: [
            {
              label: "GitHub Copilot docs",
              kind: "官方",
              url: "https://docs.github.com/en/copilot"
            },
            {
              label: "vLLM",
              kind: "開源",
              url: "https://vllm.ai"
            }
          ]
        }
      ],
      quotaStrategy: {
        principle:
          "Codex Pro 額度應優先用在會產生長期資產的專案：能 commit、能部署、能測試、能重複使用、能累積作品集。一次性翻譯、簡短問答、單段文案應交給一般 ChatGPT 或等低成本時段處理。",
        bestProjects: [
          "個人 AI 學習網站：每天新增內容、來源、趨勢分類與搜尋功能，累積可展示作品。",
          "AI FDE 作品集：做 3-5 個可公開 demo，例如 RAG 知識庫、agentic coding 流程、評估 dashboard、成本監控工具。",
          "工作流自動化：把重複整理、寄信、報表、資料清洗、檔案歸檔做成腳本或排程。",
          "既有專案升級：讓 Codex 讀整個 repo，補測試、修 bug、重構、寫 README、整理部署流程。"
        ],
        weeklyPlan: [
          "60% 額度投入可發布專案：網站、dashboard、工具、automation。",
          "25% 額度投入學習與研究：追蹤 AI 社群、GitHub 熱門 repo、論文與官方更新。",
          "15% 額度投入維護：code review、測試、文件、整理 backlog 與修小 bug。"
        ],
        avoid: [
          "不要把 Pro 額度花在可以一次問完的小知識、翻譯或短摘要。",
          "不要在需求不清楚時直接叫 Codex 大改；先請它讀 repo、列風險、提出小步驟。",
          "不要只追求產生很多檔案；每次任務都要留下可驗收結果，例如測試通過、網站更新、commit 或報告。"
        ],
        sources: [
          {
            label: "OpenAI Codex",
            kind: "官方",
            url: "https://openai.com/codex/"
          },
          {
            label: "Codex pricing",
            kind: "官方",
            url: "https://developers.openai.com/codex/pricing"
          }
        ]
      },
      debate: [
        {
          label: "支持觀點",
          text: "如果多代理協作與本地模型已能覆蓋不少開發任務，企業就能用更低成本建立可控的 AI coding 流程。"
        },
        {
          label: "疑慮風險",
          text: "代理變多後，系統也更難除錯與驗收；若沒有 trace、評估與回退設計，複雜度可能超過效益。"
        },
        {
          label: "後續追蹤",
          text: "接下來值得看哪些團隊能把 agent trace、任務評估、成本監控與模型替換做成穩定產品，而不只是 demo。"
        }
      ],
      term: {
        name: "Agentic Coding",
        definition:
          "Agentic coding 是讓模型不只回一段程式碼，而是能拆任務、讀檔、修改、驗證、重試，像工程助理一樣完成一段工作流程。",
        example:
          "例如把需求拆成讀 repo、找錯誤、改檔、跑檢查與整理變更摘要，而不是只要求模型一次寫完函式。",
        misunderstanding:
          "Agentic coding 不是把聊天機器人包成 IDE 插件就算完成；真正關鍵是流程控制、可觀測性與驗收機制。"
      },
      fde: {
        scenario:
          "客戶希望為內部開發團隊導入 AI coding 助理，但擔心雲端模型成本過高，且每次輸出都難以驗收。",
        questions: [
          "哪些任務適合先交給單代理，哪些需要多代理協作？",
          "是否需要保留 agent trace、版本差異與檢查結果供稽核？",
          "本地模型、雲端模型與人工覆核要如何分工，才能兼顧成本與品質？"
        ],
        exercise:
          "設計一個 AI coding PoC 流程圖，至少拆成需求解析、檔案修改、測試檢查、人工覆核四段，並標示每段的風險控點。",
        interview:
          "我會先把 AI coding 任務拆成可觀測的幾個步驟，再決定哪些步驟用本地模型、哪些保留人工覆核，避免直接追求全自動。"
      }
    },
    {
      id: "2026-06-29",
      date: "2026-06-29",
      title: "模型蒸餾爭議把 AI 競爭推向治理問題",
      topic: "模型治理",
      impact: "高",
      memory: "今天要記住：能力競爭會外溢成資料來源、帳號濫用與授權邊界的治理題。",
      status: "未讀",
      summary:
        "今天的主題聚焦在大型模型供應商對未授權模型蒸餾的指控。這類事件不只是商業競爭，也提醒企業導入 AI 時，必須同時處理資料來源、模型使用條款、監控與稽核。",
      tags: ["模型", "治理", "安全", "AI FDE"],
      signals: [
        {
          type: "官方/產業",
          title: "模型蒸餾爭議升溫",
          text: "大型模型供應商開始把未授權蒸餾、帳號濫用與服務條款執行視為核心治理議題。",
          why: "企業導入外部模型時，必須把資料來源、授權與使用紀錄納入 PoC 設計。"
        },
        {
          type: "全球社群",
          title: "開發者討論模型能力是否會被低成本複製",
          text: "AI 社群關注蒸餾是否會讓新模型能力快速商品化，也擔心過度封閉會影響開源創新。",
          why: "這能幫你理解市場為何同時追求開放、成本下降與合規保護。"
        },
        {
          type: "GitHub",
          title: "蒸餾、評估與模型監控工具更值得追蹤",
          text: "相關熱門 repo 可優先看資料集生成、模型評估、輸出監控、policy guardrail 與 audit log 工具。",
          why: "AI FDE 不只會串 API，也要知道哪些開源工具能補上治理與驗收缺口。"
        }
      ],
      debate: [
        {
          label: "支持觀點",
          text: "模型公司需要保護訓練投資與服務條款，否則高成本模型會被低成本複製，削弱持續研發誘因。"
        },
        {
          label: "疑慮風險",
          text: "如果平台只靠事後指控而缺少清楚可驗證的規則，企業客戶會很難判斷哪些整合方式合規。"
        },
        {
          label: "後續追蹤",
          text: "值得看供應商是否推出更清楚的使用政策、偵測機制、API 速率控管與企業稽核報告。"
        }
      ],
      term: {
        name: "Model Distillation",
        definition:
          "模型蒸餾是用一個能力較強的模型產生輸出，再訓練較小或較便宜的模型去模仿它的行為。合法用途包含壓低成本與部署到受限環境，但若資料來源或授權不清楚，就會變成風險。",
        example:
          "企業可能用大型模型先產生客服問答範例，再微調一個小模型部署在內部知識庫查詢流程。",
        misunderstanding:
          "蒸餾不是單純複製檔案，而是透過輸入輸出行為學習；真正要釐清的是資料來源、授權與使用目的。"
      },
      fde: {
        scenario:
          "客戶想把外部模型能力內化到自己的客服或授信輔助系統，並要求降低推論成本。",
        questions: [
          "訓練資料是否來自被授權的輸出或內部資料？",
          "是否需要保留提示、輸出與模型版本紀錄供稽核？",
          "成本下降後，準確率、風險與申訴流程如何衡量？"
        ],
        exercise:
          "寫一段 PoC 風險說明：把模型蒸餾拆成資料來源、授權、品質評估、監控告警四個檢查點。",
        interview:
          "我會先確認蒸餾資料的授權邊界，再設計離線評估與線上監控，避免只追求成本下降而犧牲合規與可追溯性。"
      }
    },
    {
      id: "2026-06-28",
      date: "2026-06-28",
      title: "限制預覽讓 frontier model 從發布變成分階段治理",
      topic: "模型發布",
      impact: "中高",
      memory: "把模型發布看成產品、風險與客戶資格共同管理的流程。",
      status: "未讀",
      summary:
        "Frontier model 不再只是一次公開發布，而是逐步開放、逐步驗證、逐步調整安全界線。這對企業導入代表 PoC 範圍、權限與評估標準要一起設計。",
      tags: ["模型", "企業導入", "評估"],
      signals: [
        {
          type: "官方/產品",
          title: "frontier model 改用分階段開放",
          text: "高能力模型越來越常先進入 limited preview，再逐步擴大到企業與開發者。",
          why: "模型上線不只是技術問題，也牽涉客戶資格、風險控管與版本驗收。"
        },
        {
          type: "全球社群",
          title: "社群開始比較預覽版與正式版落差",
          text: "討論焦點包含能力是否縮水、限制是否清楚、企業是否能穩定重現測試結果。",
          why: "導入前要問清楚模型版本、可用範圍與退場方案。"
        }
      ],
      debate: [
        {
          label: "支持觀點",
          text: "分階段開放可以降低安全風險，讓供應商先觀察高能力模型在真實使用中的問題。"
        },
        {
          label: "疑慮風險",
          text: "客戶可能不知道自己拿到的是哪個能力層級，也難以比較不同模型的真實表現。"
        },
        {
          label: "後續追蹤",
          text: "觀察供應商是否提供清楚的版本紀錄、限制條件與企業測試指南。"
        }
      ],
      term: {
        name: "Limited Preview",
        definition:
          "限制預覽是先讓少數客戶、研究者或合作夥伴使用新功能，收集安全、品質與產品回饋後再擴大開放。",
        example: "企業先在非核心流程測試新模型，例如內部文件摘要，而不是直接導入授信決策。",
        misunderstanding: "限制預覽不代表功能不重要，反而常代表能力強、風險高，需要更謹慎管理。"
      },
      fde: {
        scenario: "客戶想把預覽版模型接進內部知識助理，但法遵擔心版本變動與輸出不可控。",
        questions: [
          "預覽版是否允許處理真實客戶資料？",
          "模型版本變動時，驗收標準是否需要重跑？",
          "失敗案例要如何回報供應商並追蹤修復？"
        ],
        exercise: "設計一張預覽版模型 PoC 檢核表，欄位包含資料等級、使用者範圍、驗收指標與回退方案。",
        interview: "我會把 limited preview 當作受控實驗，而不是正式上線；先限定資料、使用者與評估窗口。"
      }
    },
    {
      id: "2026-06-27",
      date: "2026-06-27",
      title: "高能力模型的企業價值要靠評估框架落地",
      topic: "模型評估",
      impact: "中",
      memory: "不要只問模型更強沒有，要問在哪個任務、哪個風險、哪個成本下更好。",
      status: "未讀",
      summary:
        "新模型的能力敘事越來越強，但企業真正需要的是能比較、能驗收、能監控的評估框架，特別是在金融、客服、研究與開發流程中。",
      tags: ["評估", "AI FDE", "企業導入"],
      signals: [
        {
          type: "GitHub",
          title: "LLM evaluation 相關專案持續熱門",
          text: "開源社群持續投入 prompt regression、RAG evaluation、agent trace 與 benchmark 管理工具。",
          why: "這類工具會直接影響 AI FDE 如何向客戶證明系統真的有改善。"
        },
        {
          type: "實務社群",
          title: "企業更在意任務型評估而非排行榜",
          text: "討論從模型總分轉向特定流程的準確率、延遲、成本、穩定性與人工覆核。",
          why: "你需要把客戶需求翻成可驗收的指標，而不是只背模型名稱。"
        }
      ],
      debate: [
        {
          label: "支持觀點",
          text: "清楚的評估指標能讓模型採購與導入從感覺判斷變成可管理決策。"
        },
        {
          label: "疑慮風險",
          text: "若評估資料集太理想化，模型在真實流程仍可能因資料品質或使用者行為而失準。"
        },
        {
          label: "後續追蹤",
          text: "觀察企業是否開始建立自己的任務型 benchmark，而不是只引用公開排行榜。"
        }
      ],
      term: {
        name: "Task-based Evaluation",
        definition:
          "任務型評估是用企業實際任務來測模型，例如摘要、分類、稽核、客服回覆，而不是只看通用能力分數。",
        example: "銀行可以用過去的內部 FAQ 與標準答案，測量 AI 助理回覆是否正確且符合合規語氣。",
        misunderstanding: "評估不是一次性測試，模型、資料與流程改變後都應該重新驗證。"
      },
      fde: {
        scenario: "客戶問哪個模型最好，期待直接拿一份排行榜做採購依據。",
        questions: [
          "最常見的前三個業務任務是什麼？",
          "錯誤輸出的成本與可接受門檻是多少？",
          "是否需要同時評估速度、費用、穩定性與資安？"
        ],
        exercise: "把一個金融客服任務拆成 accuracy、groundedness、latency、cost 四個評估指標。",
        interview: "我不會只回答哪個模型最強，而會先把客戶任務轉成可驗收的評估矩陣。"
      }
    }
  ],
  weekly: [
    {
      title: "本週主線",
      text: "本週主線很清楚：AI 競爭正在從單純模型能力，轉向 frontier agent 的治理審查、長流程 coding agent 的可靠性，以及任務型 benchmark 的可驗收落地。"
    },
    {
      title: "本週名詞",
      text: "Deployment Gate、Checkpointed Coding Agent、Task-based Evaluation。"
    },
    {
      title: "本週練習",
      text: "把一個企業 agent 導入 PoC 拆成任務型 eval、權限分級、人工覆核、checkpoint、供應風險與回退方案。"
    }
  ]
};
