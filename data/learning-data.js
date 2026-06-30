window.AI_LEARNING_DATA = {
  entries: [
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
      text: "AI 競爭正在從單純模型能力，轉向授權治理、發布節奏，以及 agentic workflow 的實作能力。"
    },
    {
      title: "本週名詞",
      text: "Agentic Coding、Model Distillation、Limited Preview。"
    },
    {
      title: "本週練習",
      text: "把一個 AI PoC 拆成資料來源、代理流程、驗收指標、風險監控與回退方案。"
    }
  ]
};
