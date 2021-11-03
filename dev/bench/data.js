window.BENCHMARK_DATA = {
  "lastUpdate": 1645536917985,
  "repoUrl": "https://github.com/couchbaselabs/couchbase-cxx-client",
  "entries": {
    "Mad Hatter": [
      {
        "commit": {
          "author": {
            "name": "couchbaselabs",
            "username": "couchbaselabs"
          },
          "committer": {
            "name": "couchbaselabs",
            "username": "couchbaselabs"
          },
          "id": "d87b5ed2dba230ea74c8120143a2fb781e834314",
          "message": "add benchmarking infrastructure",
          "timestamp": "2021-11-03T20:04:35Z",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/pull/32/commits/d87b5ed2dba230ea74c8120143a2fb781e834314"
        },
        "date": 1635978505812,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 344.781,
            "range": "± 52.0124",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d3097adf06225768fbe57e1a5a87752553bbe95",
          "message": "add benchmarking infrastructure (#32)",
          "timestamp": "2021-11-08T17:08:04Z",
          "tree_id": "78072287b54e8c1737b759031d0d60ed9fe585ed",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/7d3097adf06225768fbe57e1a5a87752553bbe95"
        },
        "date": 1636392823558,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 361.311,
            "range": "± 91.9026",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51ad42064fa5153bdd2cf7428e5fb74df7ae995e",
          "message": "CXXCBC-25: keep scope and collection separate in document_id (#36)",
          "timestamp": "2021-11-08T18:26:02Z",
          "tree_id": "c46363b243420e50dad44b3d20596b6d14762d65",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/51ad42064fa5153bdd2cf7428e5fb74df7ae995e"
        },
        "date": 1636397177744,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 547.207,
            "range": "± 760.97",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04a826d7711b7353eec1254c0f92d5479138f803",
          "message": "represent CAS as type instead of std::uint64_t (#35)",
          "timestamp": "2021-11-08T18:53:33Z",
          "tree_id": "ceccd1f4a16b423ecee69aedfd1761c47934f0cd",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/04a826d7711b7353eec1254c0f92d5479138f803"
        },
        "date": 1636398591770,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 351.28,
            "range": "± 87.1474",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0aae6af8c075961141fa10deaa8653f5f111ba75",
          "message": "restructuring test helpers (#40)\n\n* Add integration test helper class\r\n\r\nAdd a helper class that correctly cleans up asio on tear down. When using sections this prevents a single test failure skipping tests defined in later sections\r\n\r\n* restructure test helpers\r\n\r\nCo-authored-by: Jake Rawsthorne <jake.rawsthorne@couchbase.com>",
          "timestamp": "2021-11-10T17:58:43Z",
          "tree_id": "3870453934af81995959f7546b82ba414f5f5671",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/0aae6af8c075961141fa10deaa8653f5f111ba75"
        },
        "date": 1636568338643,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 601.628,
            "range": "± 839.542",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "935b86f676856c3026f4ce6fffe5b77bc59aa724",
          "message": "default constructor for document_id (#38)",
          "timestamp": "2021-11-10T18:58:42Z",
          "tree_id": "e3af097580382c9f34240ec29f42ab98e7e87e88",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/935b86f676856c3026f4ce6fffe5b77bc59aa724"
        },
        "date": 1636571963122,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 669.282,
            "range": "± 991.137",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca933ba3375e8cf9cbf0a0ae72f6059fe88a259a",
          "message": "SDKQE-2482: Port arithmetic integration tests from lcb (#42)",
          "timestamp": "2021-11-12T15:40:11Z",
          "tree_id": "96455c35f20949987b1ae82e53cdbcbd3cc4fb60",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/ca933ba3375e8cf9cbf0a0ae72f6059fe88a259a"
        },
        "date": 1636732625186,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 335.497,
            "range": "± 43.621",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "519f6dd1661156011f6d6204e1e024c884b67822",
          "message": "Fix flaky bucket management test (#41)\n\nAdd test helpers that wait for an arbitrary condition\r\nAdd test helper that waits for a bucket to become healthy",
          "timestamp": "2021-11-12T15:41:26Z",
          "tree_id": "450ae34accca2233b3a5ccccb6d60a5349d2dba2",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/519f6dd1661156011f6d6204e1e024c884b67822"
        },
        "date": 1636732873420,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 510.521,
            "range": "± 279.924",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d067614d62dc20a9673dbe8d175b307cdd08bc9a",
          "message": "add missing header (#46)\n\ngcc 11 complains that <optional> is not included yet in\r\nconfiguration.hxx",
          "timestamp": "2021-11-15T11:04:56Z",
          "tree_id": "8af04398e8dc03818857a5d2da2bf054d2e96ce7",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/d067614d62dc20a9673dbe8d175b307cdd08bc9a"
        },
        "date": 1636975288803,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 471.922,
            "range": "± 784.355",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f75eb7e041f0df46e99dce8cb98a8c37076de586",
          "message": "fix build on MacOS (#47)",
          "timestamp": "2021-11-15T11:04:38Z",
          "tree_id": "0811455f5043f061ab6dc979da3b0a9b0f4580cd",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/f75eb7e041f0df46e99dce8cb98a8c37076de586"
        },
        "date": 1636975305638,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 403.091,
            "range": "± 528.759",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3c0d9beb7b45ae550e3b355ee8a1a8a174d7758",
          "message": "SDKQE-2484: Port CRUD tests from libcouchbase (#44)\n\n* display test output on failure\r\n* implement shortcut check for exists_response\r\n* port mutation integration tests from lcb\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-11-15T13:26:40Z",
          "tree_id": "3cd2d2e8ec0c04f612f4dbf4d2d142b933fffffe",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/e3c0d9beb7b45ae550e3b355ee8a1a8a174d7758"
        },
        "date": 1636983823168,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 360.698,
            "range": "± 121.553",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07d3b4815f76d956cb08cf5420f37fa6274679f5",
          "message": "Skip durability tests on older server versions (#48)",
          "timestamp": "2021-11-15T13:51:22Z",
          "tree_id": "9771506456a0ec2a98907b1bc56aed476b1ba705",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/07d3b4815f76d956cb08cf5420f37fa6274679f5"
        },
        "date": 1636985496240,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 570.87,
            "range": "± 719.276",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b9a9bbca9f98c37ba70122f1fd3d33c1f9351f6",
          "message": "CXXCBC-28: switch exists operation to get_meta (#49)",
          "timestamp": "2021-11-15T18:06:19Z",
          "tree_id": "20787e4a341e4f826c6b5492ce511a36731d44cf",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/0b9a9bbca9f98c37ba70122f1fd3d33c1f9351f6"
        },
        "date": 1637000619528,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 349.862,
            "range": "± 127.475",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a43d22ff519f4f62ad2c3f85d9122db96acaefa8",
          "message": "fix move semantics for handlers (#45)\n\nin particular, allow to use lambdas that capture move-only objects as\r\noperation handlers",
          "timestamp": "2021-11-17T17:56:24Z",
          "tree_id": "019754ba279318fdf592e79d54218a799aa92255",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/a43d22ff519f4f62ad2c3f85d9122db96acaefa8"
        },
        "date": 1637173081094,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 516.285,
            "range": "± 272.43",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1128790d371b9aefd047ca08de603a64daf16ead",
          "message": "SDKQE-2483: Port collections tests from lcb (#43)\n\n* SDKQE-2483: Port collections tests from lcb\r\n* update retry reasons of the original request when collection is missing\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-11-18T18:42:50Z",
          "tree_id": "e03b2ac62c67763215a3e6576a52262988b3bfc0",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/1128790d371b9aefd047ca08de603a64daf16ead"
        },
        "date": 1637262167976,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 491.943,
            "range": "± 599.25",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3eb2d3d2d3d9f171c74ae7117362a995f39ce33d",
          "message": "explicitly assign values to errors (#54)\n\n1. RFC has these codes specified, so it would be better if we use them,\r\n   because our errors are basically numeric values.\r\n\r\n2. Output operator for std::error_code uses bare integer value instead\r\n   of message, and it will be easier to search for codes in the sources.",
          "timestamp": "2021-11-19T18:28:59Z",
          "tree_id": "ccca2e8691a57c25f2e54ab7c7d52c6414160ecb",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/3eb2d3d2d3d9f171c74ae7117362a995f39ce33d"
        },
        "date": 1637347854882,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 561.678,
            "range": "± 470.004",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "470f8f136961bd06e13a0b46f883cc1c92a47731",
          "message": "SDKQE-2487: Port N1QL query tests from lcb (#50)\n\n* SDKQE-2487: Port N1QL query tests from lcb\r\n\r\n* Capture debug logs during ci\r\n\r\n* log reponse body on unexpected error from query engine\r\n\r\n* switch sanitizers on github actions to server 7.0.2\r\n\r\n* use multi-threaded logger for stderr in the tests\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-11-19T18:28:42Z",
          "tree_id": "f2947419edd80a44353c3d3ada4bd7859b45608d",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/470f8f136961bd06e13a0b46f883cc1c92a47731"
        },
        "date": 1637347902037,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 500.399,
            "range": "± 273.175",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8e5d4b291fca6b841751f76c7f8b45c6ff58384",
          "message": "ensure MCBP session closure when topology changes (#53)",
          "timestamp": "2021-11-19T18:45:48Z",
          "tree_id": "791183871a00856cd851e84c596ece9834b2f394",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/e8e5d4b291fca6b841751f76c7f8b45c6ff58384"
        },
        "date": 1637348922255,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 677.825,
            "range": "± 789.573",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffe4b3ad172dd47920eece4bd58f1f3162453afa",
          "message": "SDKQE-2489: Port subdoc tests from lcb (#51)\n\n* SDKQE-2489: Port subdoc tests from lcb\r\n\r\n* detect empty paths and swap op codes for full doc operations\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-11-19T20:19:30Z",
          "tree_id": "4e4448743f70794e17b340ba7686b41a5d0abd0f",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/ffe4b3ad172dd47920eece4bd58f1f3162453afa"
        },
        "date": 1637354507984,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 662.733,
            "range": "± 1.2967",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "03931a60269ae76a56c1fab94dece8ee51013471",
          "message": "SDKQE-2496: Add collection management test (#57)",
          "timestamp": "2021-11-23T18:23:25Z",
          "tree_id": "d3f0f8fe2ca9dfbaa4cd72bdf721c6b4c1ba6a6f",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/03931a60269ae76a56c1fab94dece8ee51013471"
        },
        "date": 1637692797917,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 481.061,
            "range": "± 886.356",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa3d5eb24643fb2488e7345fa1e7e12f8ddf7f42",
          "message": "SDKQE-2495: Temporarily add sleep after scope and collection changes (#55)\n\nThe collection manifest can be partially propagated in a multi node cluster. Until all nodes can be checked, add a sleep after create/drop",
          "timestamp": "2021-11-23T18:22:44Z",
          "tree_id": "8a510a19214f953af6dbf5ac56eafd5f5d8e9d70",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/fa3d5eb24643fb2488e7345fa1e7e12f8ddf7f42"
        },
        "date": 1637693064466,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 435.642,
            "range": "± 148.716",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc41e507d552ac29e1ea7feccb452b91654fb01f",
          "message": "add cxx_function header into public includes (#59)",
          "timestamp": "2021-11-23T12:07:23-07:00",
          "tree_id": "ae70712c6f7ff798fc560a9a4bf7754e5340ea61",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/cc41e507d552ac29e1ea7feccb452b91654fb01f"
        },
        "date": 1637695476532,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 303.246,
            "range": "± 44.2699",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c997ec0ffed3da7a77c667f758af2fb971cd2b8b",
          "message": "add more overloads for JSON parser wrapper (#60)",
          "timestamp": "2021-11-23T19:36:35Z",
          "tree_id": "11498f8c3cd8fbcffd06299b9cfeadecd88964d6",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/c997ec0ffed3da7a77c667f758af2fb971cd2b8b"
        },
        "date": 1637697365285,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 389.957,
            "range": "± 105.243",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c101b7235b71684a1a1631d14fca95c6281a93f8",
          "message": "SDKQE-2497: Add user management tests (#58)\n\n* CXXCBC-20: Fix group_get_all returning internal_server_failure\r\n\r\n* CXXCBC-33: Fix auth domain formatting in request path\r\n\r\n* SDKQE-2497: Add user management tests",
          "timestamp": "2021-11-24T19:41:54Z",
          "tree_id": "ecc6aaf58a1a9e3ae02fe20ee6a7b0df415d0d4f",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/c101b7235b71684a1a1631d14fca95c6281a93f8"
        },
        "date": 1637784285684,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 644.139,
            "range": "± 712.563",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9c436d9837d6591b074091a2d7086df735bd4e70",
          "message": " SDKQE-2499: Add query index management tests (#61)\n\n* Fix error code for index not found\r\n\r\n* SDKQE-2499: Add query index management tests\r\n\r\n* Use raw strings in queries instead of escaping\r\n\r\n* fix comment on the error code\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-11-24T20:24:57Z",
          "tree_id": "42fa53015606775ee9f3ef621a8fb351d40b8515",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/9c436d9837d6591b074091a2d7086df735bd4e70"
        },
        "date": 1637786591912,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 338.791,
            "range": "± 32.6572",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "025f8f27f7772cb93269cb5e4d24149e49cc1551",
          "message": "fix snappy compression of the value (#62)\n\nWhen the value was compressed, the body length and datatype fields were\r\nnot updated because of non-reference argument. The patch improves API a\r\nbit, and modification of the packet done by the caller now.",
          "timestamp": "2021-11-24T20:24:30Z",
          "tree_id": "5ea50e28c8f0988db83ee2d7a8d9906ce0ccf67b",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/025f8f27f7772cb93269cb5e4d24149e49cc1551"
        },
        "date": 1637786803972,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 626.757,
            "range": "± 847.585",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c1f50427b547ef375e29637b12b293878c3db970",
          "message": "SDKQE-2474: Expand bucket management integration tests (#56)\n\n* CXXCBC-21: Fix error message when flushing a bucket with flush disabled\r\n\r\n* CXXCBC-23: Fix create memcached bucket\r\n\r\n* CXXCBC-24: Fix create ephemeral bucket\r\n\r\n* SDKQE-2474: Expand bucket management integration tests\r\n\r\n* fix memory leak associated with restarting MCBP session\r\n\r\n* fix session restart\r\n* introduce close_bucket API to stop background session reconnection\r\n* fixed memory leak\r\n\r\n* fix issue found by thread sanitizer\r\n\r\n* fix TODO item about getting number of nodes from the cluster\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-11-25T16:15:07Z",
          "tree_id": "8f1bfa8d01f5b6db66f9daa083bc376681a3a4f2",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/c1f50427b547ef375e29637b12b293878c3db970"
        },
        "date": 1637858048722,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 342.771,
            "range": "± 65.0123",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "77faff6803212303017a27b4d09a47815a5be765",
          "message": "use mutex lock when using buckets map (#52)",
          "timestamp": "2021-11-26T07:17:38Z",
          "tree_id": "31184f08ff1a134ddee8b35ad99eeb8c043c8d2e",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/77faff6803212303017a27b4d09a47815a5be765"
        },
        "date": 1637912204094,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 381.461,
            "range": "± 277.749",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a9cc37a8c373f52bde9e50b7f573b0cb1242351",
          "message": "CXXCBC-47: improve client side error message when TLS is enforced on the server side (#63)",
          "timestamp": "2021-11-29T17:33:10Z",
          "tree_id": "c2869b261b3cdb86d8ee04b0c2fe3aff60a583f1",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/7a9cc37a8c373f52bde9e50b7f573b0cb1242351"
        },
        "date": 1638208517697,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 489.043,
            "range": "± 291.711",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c747dda909e289ed9266347c1b3e83c02b9c2cf0",
          "message": "tests: try to detect cluster version using REST API (#66)\n\nfallback to version from environment only if the cluster does not agree\r\non version or returns invalid version string",
          "timestamp": "2021-11-29T19:07:48Z",
          "tree_id": "1b5f347be8448dd901cc1173b202df4304ead457",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/c747dda909e289ed9266347c1b3e83c02b9c2cf0"
        },
        "date": 1638214064794,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 396.409,
            "range": "± 335.615",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00a3a49015436daea60ab663dc83de3ea66db10a",
          "message": "initiate reads only after all HTTP buffers has been written (#69)",
          "timestamp": "2021-11-30T19:01:03Z",
          "tree_id": "daae287dd47b4c781e2b664c11bb59e1070ee4ea",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/00a3a49015436daea60ab663dc83de3ea66db10a"
        },
        "date": 1638299980094,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 352.275,
            "range": "± 69.0367",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "88a6a4cf3ed666f927f3c592f54ef55cf461b7cc",
          "message": "Skip group and query index management tests on older server versions (#64)",
          "timestamp": "2021-11-30T19:01:38Z",
          "tree_id": "4bc23b69aa99d4835c0c74abdc3a156632ca6a39",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/88a6a4cf3ed666f927f3c592f54ef55cf461b7cc"
        },
        "date": 1638300082532,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 343.674,
            "range": "± 61.8847",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "820b28c6e21871b9cc4a3af53388435708c17abe",
          "message": "do not log empty metrics report (#67)",
          "timestamp": "2021-11-30T19:00:41Z",
          "tree_id": "f430fd30815ba0ff3bb1e5cbff6e3d3ec448c5d7",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/820b28c6e21871b9cc4a3af53388435708c17abe"
        },
        "date": 1638300430519,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 529.907,
            "range": "± 163.011",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "437e0e7b822de574f2e2c29b101aa20ac0d01952",
          "message": "Fix live cluster version parse (#72)\n\nCluster version appends -edition. Account for this and parse it so we can test community edition\r\nFix neo version to apply to all future versions",
          "timestamp": "2021-12-01T12:12:21Z",
          "tree_id": "6d50d3b4994a80955f7a2bd2665c5bfe5fd20c42",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/437e0e7b822de574f2e2c29b101aa20ac0d01952"
        },
        "date": 1638362091503,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 534.194,
            "range": "± 364.699",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43e1df046ae7b646f4c22cb2e23dc0d2d73e8170",
          "message": " SDKQE-2500: Add analytics management integration tests (#70)\n\n* Fix if not exists clause order in analytics_index_create\r\n\r\n* Fix compound dataverse name in analytics_index_create\r\n\r\n* Fix path_escape by using the correct encoding type\r\n\r\n* Fix parameter encoding in analytics_link_get_all\r\n\r\n* SDKQE-2500: Add analytics management integration tests\r\n\r\n* CXXCBC-49: always cancel command timers when invoking handlers\r\n\r\n* More version fixes.\r\n\r\nSupport cluster describe on older versions, skip nodeUUID.\r\nOpen bucket if cluster describe fails with service_not_available in load_cluster_info.\r\nAdd more feature flags for analytics\r\n\r\n* do not use 'this' pointer on deleted handler\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-12-01T16:29:42Z",
          "tree_id": "4ce60114cfecf11f95751b19a9f9145338ca0006",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/43e1df046ae7b646f4c22cb2e23dc0d2d73e8170"
        },
        "date": 1638377297011,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 341.741,
            "range": "± 41.5023",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5fb2a7b3ecfaa6255adcb7993b786499cb1548a6",
          "message": "CXXCBC-29: add storage option for bucket manager (#68)",
          "timestamp": "2021-12-01T17:20:32Z",
          "tree_id": "f632e3abde452b9237e1e11f03cc2872019ddd88",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/5fb2a7b3ecfaa6255adcb7993b786499cb1548a6"
        },
        "date": 1638380695651,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 548.758,
            "range": "± 384.709",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a8276bc7069db464d3d48f9c2a733d1ce6028fa",
          "message": "CXXCBC-19: handle rate and quota limit error codes (#71)",
          "timestamp": "2021-12-01T17:47:27Z",
          "tree_id": "d81b4b961a9436c87f745214ac34562ded7882a4",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/4a8276bc7069db464d3d48f9c2a733d1ce6028fa"
        },
        "date": 1638382282112,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 511.932,
            "range": "± 93.2059",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3b8e098a650d09bd127cb38a5fd5024af07649e",
          "message": "CXXCBC-29: add test for storage backend with ephemeral bucket (#73)",
          "timestamp": "2021-12-01T19:09:05Z",
          "tree_id": "252130d71c3af986fa9a7f2f11ddcc18323327ba",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/f3b8e098a650d09bd127cb38a5fd5024af07649e"
        },
        "date": 1638387174495,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 548.766,
            "range": "± 453.371",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5ab7291a38eeed8b0ba51a98fe5bac5b524b518f",
          "message": "fix tests on jenkins (#78)\n\n* wait for bucket to be created in management tests\r\n\r\n* compare ram_quota with margin, as server is not always precise about it\r\n\r\n* fix draining queue of deferred commands\r\n\r\n* wait for group to be created in management tests\r\n\r\n* increase operation timeout up to 10 seconds for multi-threaded test\r\n\r\n* use mutex to protect bucket's deferred queue\r\n\r\n* added missing includes for basic headers (cstring, algorithm, etc...)\r\n\r\n* add wating condition for bucket update test\r\n\r\n* guard minimum durability tests and allow it only for 6.6+\r\n\r\n* return last response when waiting for bucket creation\r\n\r\n* ignore bucket_not_found errors when creating indexes if it is possible\r\n\r\n* ignore bucket_not_found errors when flushing bucket if it is possible\r\n\r\n* ignore group_not_found errors when upserting the user if it is possible\r\n\r\n* ignore user_not_found errors when upserting the user, if it is possible\r\n\r\nCo-authored-by: Brett Lawson <brett19@gmail.com>",
          "timestamp": "2021-12-15T14:22:22-08:00",
          "tree_id": "5796b856fb79a5584d4a2e69e23060b4f6c2f4a2",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/5ab7291a38eeed8b0ba51a98fe5bac5b524b518f"
        },
        "date": 1639608278166,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 583.056,
            "range": "± 775.978",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "40e9c4132e79c585a7b39b474551e465fd8ffdd8",
          "message": "Updated compiler warnings to not apply outside client and fixed a few minor issues. (#79)\n\n* Updated warnings/sanitizers to only apply when building couchbase++ itself.\r\n\r\n* fixed inconsistent logger function naming\r\n\r\n* fixed incorrect typing for some handler forwards",
          "timestamp": "2021-12-15T15:08:44-08:00",
          "tree_id": "4ef46713e106c3c6355e803819ca4c4e2451801a",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/40e9c4132e79c585a7b39b474551e465fd8ffdd8"
        },
        "date": 1639610911459,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 449.005,
            "range": "± 867.258",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "davidmichaelkelly@gmail.com",
            "name": "David Kelly",
            "username": "davidkelly"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a16bccd8cdef17b3ecd9181828e47a56a49bc76",
          "message": "CXXCBC-60: Collection and Scope Name have 251 character limit (#77)\n\nUsed to be 30, but now it is 251.",
          "timestamp": "2021-12-15T19:49:56-08:00",
          "tree_id": "79a0ca9d4a7eba12301918483014cf10cc7afafc",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/3a16bccd8cdef17b3ecd9181828e47a56a49bc76"
        },
        "date": 1639627737199,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 336.226,
            "range": "± 36.3049",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b97110c79e509dd0cc5ffa392839ecf60fb2da80",
          "message": "Improved build performance and removed unneccessary tao/fmt/spdlog dependencies. (#76)\n\n* reduce dependence on gsl\r\n\r\n* replace usages of fmt::join with utils::join_strings\r\n\r\n* added more missing headers\r\n\r\n* cleaned up all custom fmt formatters\r\n\r\n* use fmt/core rather than entire fmt library\r\n\r\n* removed spdlog usage from logger header\r\n\r\n* cleanup usage of tao throughout codebase\r\n\r\n* use our own version of fmt instead of spdlog bundled version",
          "timestamp": "2021-12-16T05:10:15Z",
          "tree_id": "7f5a446a0a23bce652ea370a6f584873e019d9e5",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/b97110c79e509dd0cc5ffa392839ecf60fb2da80"
        },
        "date": 1639632248361,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 731.965,
            "range": "± 983.726",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "70e5c5909dec5b7af17f0222adbbd73b35efdf29",
          "message": "ignore group_not_found errors when getting the group if it is possible (#81)",
          "timestamp": "2021-12-16T11:04:45Z",
          "tree_id": "273a7c0474dade6f42dedd56f8ec06376e0c6e6c",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/70e5c5909dec5b7af17f0222adbbd73b35efdf29"
        },
        "date": 1639653465282,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 330.151,
            "range": "± 195.211",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2257bffa7d7268eeb08fe2e440fd9fabc225f73",
          "message": "handle cluster_map_notification during MCBP session bootstrap (#82)",
          "timestamp": "2021-12-16T12:11:49Z",
          "tree_id": "f3c1f7f6f340d98d3f8f085a135d8c0ed2a337a2",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/d2257bffa7d7268eeb08fe2e440fd9fabc225f73"
        },
        "date": 1639657462703,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 325.589,
            "range": "± 54.0921",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bad0d2f3595d0522129231f0fb16cf8713077b51",
          "message": "fix join_strings for fmt traits (#80)\n\n* fix join_strings for fmt traits\r\n\r\n* add unit test for join_strings_fmt",
          "timestamp": "2021-12-16T12:52:10Z",
          "tree_id": "202f47b7a650a2ac3ebaee2be8f35e67fff323bf",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/bad0d2f3595d0522129231f0fb16cf8713077b51"
        },
        "date": 1639659945702,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 349.996,
            "range": "± 173.743",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e7608c16f57ffdededcce1d8ef327c09aaff7b4",
          "message": "SDKQE-2432: Support for Multiple Root Certs testing (#75)\n\nAllow passing in a certificate and key path for cert auth testing\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-12-16T13:45:01Z",
          "tree_id": "44103c58657fd93638910093e119d943940111f0",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/3e7608c16f57ffdededcce1d8ef327c09aaff7b4"
        },
        "date": 1639663418853,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 545.851,
            "range": "± 388.352",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "487062224d247192e0da56a7ca93260f90cc5b4a",
          "message": " SDKQE-2501: Add search index management tests (#65)\n\n* Remove unnecessary index_name from search_index_get_all\r\n\r\n* Fix linking of search_index_get_stats\r\n\r\n* SDKQE-2501: Add search index management tests\r\n\r\n* ensure that index name is never empty\r\n\r\n* prefer version from live cluster in search management tests\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-12-16T14:25:26Z",
          "tree_id": "7811e06de079d3f5d5c6b2387f915fd2a9439e9c",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/487062224d247192e0da56a7ca93260f90cc5b4a"
        },
        "date": 1639665832117,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 591.388,
            "range": "± 990.888",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "842d7205471e4a1d327ed281d2f3db222662a8c3",
          "message": "display HTTP body if bucket_get_all_response cannot be parsed (#84)",
          "timestamp": "2021-12-16T16:42:01Z",
          "tree_id": "dcd25cdcc463d719f5b2ee672c6621ba34914633",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/842d7205471e4a1d327ed281d2f3db222662a8c3"
        },
        "date": 1639673771346,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 341.379,
            "range": "± 69.4889",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "870a99ca882a0220b07f5dae0b55f7790ce5d023",
          "message": "Ignore search index not online errors when analyzing document (#83)",
          "timestamp": "2021-12-16T19:23:55Z",
          "tree_id": "517842c05aa6c8edfb78aca467e8b40d150d8d3a",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/870a99ca882a0220b07f5dae0b55f7790ce5d023"
        },
        "date": 1639683497347,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 343.565,
            "range": "± 65.6381",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba87a8cb02872359f97926795fe6ec0c66079c31",
          "message": "CXXCBC-59: load tls verify file (#85)\n\n* CXXCBC-59: load trust_certificate as verify file\r\n\r\n* do not initiate asio operations if the http session has been stopped\r\n\r\n* fix TLS setup for multiple intermediate certificates",
          "timestamp": "2021-12-17T11:13:55Z",
          "tree_id": "f2896156732b7ee694532d7219fbfa05390150ff",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/ba87a8cb02872359f97926795fe6ec0c66079c31"
        },
        "date": 1639740490860,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 348.232,
            "range": "± 47.3935",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8f82c13b844b5eb73ab8cfc9b8c1f15476cb5cf0",
          "message": "Cleaned up includes to adhere to llvm including ordering. (#86)\n\n* fixup all headers\r\n\r\n* added lots of missing headers\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-12-17T12:39:37Z",
          "tree_id": "227fb460e035c040bd9d527c6fc4e687bf9ef639",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/8f82c13b844b5eb73ab8cfc9b8c1f15476cb5cf0"
        },
        "date": 1639745617944,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 338.983,
            "range": "± 71.5866",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "50a6e7ddf3db87f20ce017ce54a6f4a501e8f05c",
          "message": "more fixes after include cleanup in 8f82c13b (#87)",
          "timestamp": "2021-12-17T13:19:54Z",
          "tree_id": "6d0f9b1ac6fd63840b3e49d9864cfa09afe96af2",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/50a6e7ddf3db87f20ce017ce54a6f4a501e8f05c"
        },
        "date": 1639748050601,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 381.947,
            "range": "± 349.814",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "699ae4a96b72ec283a83115167ff4572fc6dde6b",
          "message": "CXXCBC-32: return invalid_argument if bootstrap_nodes is empty (#92)",
          "timestamp": "2021-12-20T17:12:56Z",
          "tree_id": "0cf4f4386f1fd5d0aed09b191781bc33cd497553",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/699ae4a96b72ec283a83115167ff4572fc6dde6b"
        },
        "date": 1640021160973,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 333.627,
            "range": "± 65.2475",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f04117fc3cbd2a0e1e23ec118c181f3514e4170",
          "message": "CXXCBC-44: add ability to perform freeform requests to HTTP services (#90)",
          "timestamp": "2021-12-22T19:59:01Z",
          "tree_id": "67fdc9174f5960ad0bba729fb65a5282201e9554",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/4f04117fc3cbd2a0e1e23ec118c181f3514e4170"
        },
        "date": 1640203933494,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 332.931,
            "range": "± 35.6759",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf615f39f8a0e89d33ae452649d30882f25483fb",
          "message": "Skip tests that don't work in certain configurations (#88)\n\nAnalytics is not supported with magma buckets\r\nAnalytics external link management is not supported with cert auth on versions < 7.1\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-12-23T08:08:30Z",
          "tree_id": "dbe7bc8895dcf04df71db2e5f391822a5ff78820",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/cf615f39f8a0e89d33ae452649d30882f25483fb"
        },
        "date": 1640247690930,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 326.092,
            "range": "± 98.2179",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b78bf9da8131d727fa83195419ef562d2032264",
          "message": "SDKQE-2522: Reduce bucket management test time on older server versions (#91)\n\nWait until a bucket is healthy on all nodes before using it to prevent timeouts during delete caused by MB-48059.\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-12-23T09:48:42Z",
          "tree_id": "6d32edcc39fe3ae0b372e87ae41be43d7898eef0",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/5b78bf9da8131d727fa83195419ef562d2032264"
        },
        "date": 1640253768475,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 346.424,
            "range": "± 135.196",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38a344e50e4f42bc11e23480bcbbab2b7bfddd31",
          "message": "CXXCBC-62: handle rate/quota limit errors during MCBP bootstrap (#93)",
          "timestamp": "2021-12-23T14:15:36Z",
          "tree_id": "b3797227be3d024ce431a8b6a204e61233364dc1",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/38a344e50e4f42bc11e23480bcbbab2b7bfddd31"
        },
        "date": 1640269754056,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 351.482,
            "range": "± 128.442",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3cf2dde35cc9ff93a58c05fc3c9da73e91bdd970",
          "message": "CXXCBC-63: generalize rate limit error handling for all query operations (#94)\n\n* CXXCBC-63: generalize rate limit error handling for all query operations\r\n\r\n* check for quota limit when creating search index\r\n\r\n* ensure that every management API is checking for rate limit errors",
          "timestamp": "2021-12-24T06:39:24Z",
          "tree_id": "8c72a9474b062603d0912623009efa80c5f71a75",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/3cf2dde35cc9ff93a58c05fc3c9da73e91bdd970"
        },
        "date": 1640328734157,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 375.44,
            "range": "± 471.406",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c7378d4635d0bf67ac2869d7457fbecfd48f837c",
          "message": "Updates for GitHub actions (#96)\n\n* update init-cluster script to configure eventing service\r\n\r\n* fix release labels for github actions\r\n\r\n* update server versions for github actions",
          "timestamp": "2022-01-03T10:35:43Z",
          "tree_id": "aec5763b113ad8d58028a6566e53acdc6a82afd9",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/c7378d4635d0bf67ac2869d7457fbecfd48f837c"
        },
        "date": 1641207204796,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 470.74,
            "range": "± 177.475",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd7aec9392688f523adc1b5c13660f4148fd0905",
          "message": "tests: wait for all pindexes of search index ready before analyzing the document (#97)",
          "timestamp": "2022-01-04T07:35:53Z",
          "tree_id": "405c9cad9b11ff59d0e7221ecdc7f606fa780962",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/bd7aec9392688f523adc1b5c13660f4148fd0905"
        },
        "date": 1641282664076,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 463.277,
            "range": "± 446.53",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "17321686415edaab6c2b0eeee6437413dd86d1f6",
          "message": "CXXCBC-66: Add include_locations to search options (#99)",
          "timestamp": "2022-01-04T18:40:52Z",
          "tree_id": "94de4d3c0eba47edf0119dbe856229cf8de7985d",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/17321686415edaab6c2b0eeee6437413dd86d1f6"
        },
        "date": 1641322663224,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 493.266,
            "range": "± 99.8664",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04889c62e18f30951764fc45bff723cb8333a1e8",
          "message": "CXXCBC-65: Add Custom member to Bucket Management ConflictResolutionType (#98)\n\nCouchbase 7.1 will provide a developer preview feature that allows\r\nbuckets to have custom conflict resolution.  Providing the new type will\r\nallow users to test out DP feature.",
          "timestamp": "2022-01-04T21:51:58Z",
          "tree_id": "ebe79e856498bdc786b2b6afec45b613b3201661",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/04889c62e18f30951764fc45bff723cb8333a1e8"
        },
        "date": 1641333943849,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 342.272,
            "range": "± 70.9264",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d731ab809b39feb0a308dfaad467c9cdcfbfd3e",
          "message": "CXXCBC-7: eventing functions management operations (#95)",
          "timestamp": "2022-01-04T22:18:00Z",
          "tree_id": "eaae71191f1a420fed2d3104b0cc9c280e68eba2",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/0d731ab809b39feb0a308dfaad467c9cdcfbfd3e"
        },
        "date": 1641335570894,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 344.549,
            "range": "± 78.5781",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "101f544c63a3018216a469d8810305cde443ad43",
          "message": "tests: check if the cluster really have service provisioned (#101)",
          "timestamp": "2022-01-06T08:51:59Z",
          "tree_id": "02660b54d042c8fe9d42e777afe4fac8be0337c8",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/101f544c63a3018216a469d8810305cde443ad43"
        },
        "date": 1641460088935,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 515.488,
            "range": "± 268.401",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8028de8d5fe675327bbb90d8b8404a6f861d6b50",
          "message": "increase default memory quota for server (#102)",
          "timestamp": "2022-01-06T09:54:40Z",
          "tree_id": "ccb9c88d89c53694cade8a1181da4204d543528c",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/8028de8d5fe675327bbb90d8b8404a6f861d6b50"
        },
        "date": 1641463877314,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 419.6,
            "range": "± 63.307",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e95ec78cc8e3d2e2c74eda182c324d8b0ac48fb0",
          "message": "CXXCBC-70: Fixed race condition in tracing. (#103)",
          "timestamp": "2022-01-10T10:48:00Z",
          "tree_id": "a80c7afd04823bfc84d7642a650a0ccb2b479db5",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/e95ec78cc8e3d2e2c74eda182c324d8b0ac48fb0"
        },
        "date": 1641812616642,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 349.36,
            "range": "± 72.6531",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "86120a686e5357df3ae359a030b2be1245053190",
          "message": "CXXCBC-68: implement preserve_expiry for query service (#100)",
          "timestamp": "2022-01-11T05:03:13Z",
          "tree_id": "81781a8d45f44a0471981e79be5b35fa1320ae9b",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/86120a686e5357df3ae359a030b2be1245053190"
        },
        "date": 1641878454017,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 571.516,
            "range": "± 758.405",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "597f818b43ce922f68669f7d829efe15005e72a8",
          "message": "SDKQE-2529: Don't run analytics tests on 5.5 (#104)\n\nRunning on 5.5 causes the analytics tests to fail when using tls. Analytics was dev preview in 5.5 so it's fine to skip it",
          "timestamp": "2022-01-11T19:41:21Z",
          "tree_id": "f0588c93558f751fc60424579525df6e11dd8427",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/597f818b43ce922f68669f7d829efe15005e72a8"
        },
        "date": 1641931049308,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 689.051,
            "range": "± 1.33008",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "809940691ef3d6eee3d06701b4165086eb257f87",
          "message": "fix thread_sanitizer offences (#89)\n\n* fix thread_sanitizer offences\r\n\r\n* use the executor from stream for associated timers\r\n\r\n* Race in logging_meter\r\n\r\n* add lock around access to recorders_\r\n* use atomic version of hdr_record_value\r\n\r\n* CXXCBC-71. fix race with bootstrapped_ and pending_buffer_ (fixes #105)\r\n\r\nCo-authored-by: David Kelly <davidmichaelkelly@gmail.com>",
          "timestamp": "2022-01-12T17:33:55Z",
          "tree_id": "fa4a243ee7892b330bf51231e4ef59b0bcf1e1e5",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/809940691ef3d6eee3d06701b4165086eb257f87"
        },
        "date": 1642009764481,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 380.379,
            "range": "± 366.696",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e38467157a08a5f1cfd2af11f0d7a36031b5e287",
          "message": "re-run cmake-format (#107)",
          "timestamp": "2022-01-14T15:03:17Z",
          "tree_id": "f84481f3f7cd32a5e95dbb4e24aeb5e16f089f45",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/e38467157a08a5f1cfd2af11f0d7a36031b5e287"
        },
        "date": 1642173520428,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 342.759,
            "range": "± 56.0831",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c41ddd7ddf4a1982c5093ebd71accdd575389bd4",
          "message": "expose HTTP status code for freeform response (#108)",
          "timestamp": "2022-01-17T07:46:20Z",
          "tree_id": "ff3ab00f57caf9f95d8da4f55f1c38747746d70b",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/c41ddd7ddf4a1982c5093ebd71accdd575389bd4"
        },
        "date": 1642406665451,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 586.059,
            "range": "± 753.675",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b8fea51f900af80abe09cbdda90aef944b05c10a",
          "message": "add test which creates scope using freeform query (#109)",
          "timestamp": "2022-01-18T19:53:44Z",
          "tree_id": "487f0f653d64969452c99c4b1e7d845ff4c13111",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/b8fea51f900af80abe09cbdda90aef944b05c10a"
        },
        "date": 1642536539220,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 355.704,
            "range": "± 71.5121",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ee93c46484816b65aefdc18d2bcd3b3f86f95ca",
          "message": "do not translate http status into error for freeform requests (#110)",
          "timestamp": "2022-01-19T06:51:22Z",
          "tree_id": "b3e58f4c93af40cc9778ef2f9492f9522302a028",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/8ee93c46484816b65aefdc18d2bcd3b3f86f95ca"
        },
        "date": 1642576154990,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 461.352,
            "range": "± 118.385",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2ee01ac434e8f6b3d4c0cc128fc2e81c14a1888c",
          "message": "use smart pointers for tracing (#112)",
          "timestamp": "2022-01-20T11:01:14Z",
          "tree_id": "9a586a3c5380e4261d6047cb81757c6537aab287",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/2ee01ac434e8f6b3d4c0cc128fc2e81c14a1888c"
        },
        "date": 1642677386075,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 353.895,
            "range": "± 62.9105",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aaf872d1fbd9f781ad244a648908582914707e54",
          "message": "CXXCBC-84: use error_code instead protocol status in subdoc results (#114)",
          "timestamp": "2022-01-20T13:59:19Z",
          "tree_id": "6d272d1cc89a2d9928a10dad09fbf1e5208ea84f",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/aaf872d1fbd9f781ad244a648908582914707e54"
        },
        "date": 1642688043202,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 364.698,
            "range": "± 107.881",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6aa10a9c2bf5668703bed7a4813b9125ef008e33",
          "message": "CXXCBC-80: do not crash when opening non-existent bucket (#113)\n\n* CXXCBC-80: do not crash when opening non-existent bucket\r\n\r\n* don't schedule read operation if previous still running\r\n\r\n* prefer std::list.remove_if() to loop and calling reset() directly\r\n\r\n* post close event to be executed on http_session strand",
          "timestamp": "2022-01-20T20:00:37Z",
          "tree_id": "dacfc4c03c81f4a20a00b0911a5f7f8a0d9b8ee1",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/6aa10a9c2bf5668703bed7a4813b9125ef008e33"
        },
        "date": 1642709916571,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 456.442,
            "range": "± 121.222",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5829df37f1454cf033ff4fee248a8b4121277f4",
          "message": "CXXCBC-50: Streaming HTTP results (#111)\n\n* CXXCBC-50: bundle jsonsl (JSON streaming lexer)\r\n\r\n* CXXCBC-50: wrap jsonsl into C++ class\r\n\r\n* CXXCBC-50: Allow streaming HTTP responses",
          "timestamp": "2022-01-20T20:32:43Z",
          "tree_id": "240bbb1295edc0e15066ae4a42602c01e8db6573",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/b5829df37f1454cf033ff4fee248a8b4121277f4"
        },
        "date": 1642711667448,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 349.129,
            "range": "± 47.6175",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed0c8867b166a58c2dfc4d63d1b23f138d28610b",
          "message": "CXXCBC-64: allow to bind query request to selected node (#115)",
          "timestamp": "2022-01-21T19:40:07Z",
          "tree_id": "807c82c6bff98339f63ba374e3235974363c0260",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/ed0c8867b166a58c2dfc4d63d1b23f138d28610b"
        },
        "date": 1642794937427,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 358.708,
            "range": "± 72.085",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e0966ea199c98e6237ecee26932af6646f7ea5bf",
          "message": "fix naming for responses of the HTTP queries (#117)",
          "timestamp": "2022-01-26T19:54:02Z",
          "tree_id": "964466bc416e2e8eab09db881110b31e021da16f",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/e0966ea199c98e6237ecee26932af6646f7ea5bf"
        },
        "date": 1643227829544,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 364.088,
            "range": "± 103.248",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1780621d6b4ebe084dacaddb05b25b2b41c9b433",
          "message": "use std::chrono types for HTTP query timings (#118)",
          "timestamp": "2022-01-26T20:57:49Z",
          "tree_id": "49515eea9783ce1e9b322587f40ca8b6a785311c",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/1780621d6b4ebe084dacaddb05b25b2b41c9b433"
        },
        "date": 1643231606311,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 348.809,
            "range": "± 51.1491",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8aaae7f1d08d82760ed5b0a04b9a9ff3ac7ab9b8",
          "message": "CXXCBC-92: include CAS into key_value error context (#119)",
          "timestamp": "2022-01-27T08:42:07Z",
          "tree_id": "6ab312ad0b53799def29423da306297b262466e8",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/8aaae7f1d08d82760ed5b0a04b9a9ff3ac7ab9b8"
        },
        "date": 1643273875427,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 369.259,
            "range": "± 102.093",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c001b00194bb74a9064ba1102f09fce84acacd3b",
          "message": "CXXCBC-92: make client_context_id optional for HTTP operations (#120)",
          "timestamp": "2022-01-27T15:23:28Z",
          "tree_id": "78fe48b8298b85ec99038e390a88671eb70d5ae3",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/c001b00194bb74a9064ba1102f09fce84acacd3b"
        },
        "date": 1643297901513,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 361.937,
            "range": "± 285.137",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b80f89482c8c2ce4265600a757ed817340a4c448",
          "message": "CXXCBC-92: declare metrics as optional in query result (#122)",
          "timestamp": "2022-01-27T15:48:42Z",
          "tree_id": "ab3b16457fc5fdbd217211194ce5748a2ff8d824",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/b80f89482c8c2ce4265600a757ed817340a4c448"
        },
        "date": 1643299394565,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 349.108,
            "range": "± 67.077",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e88bd380dcb629dae10f736fcb9e4772a8ebec8a",
          "message": "CXXCBC-41: use default timeouts from cluster_options (#121)",
          "timestamp": "2022-01-27T17:07:43Z",
          "tree_id": "b34ae0cdbbe5efdc12042e3dba2307731a2b3fc0",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/e88bd380dcb629dae10f736fcb9e4772a8ebec8a"
        },
        "date": 1643304168851,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 353.315,
            "range": "± 44.5065",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c112e452d083c901cbcc6e1a9fdbfb2be20615e2",
          "message": "CXXCBC-92: fix metrics for analytics and query resluts to conform RFC (#123)",
          "timestamp": "2022-01-27T19:37:20Z",
          "tree_id": "8575a4f5b2b714b5062af40c09b67e9af3b12c0c",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/c112e452d083c901cbcc6e1a9fdbfb2be20615e2"
        },
        "date": 1643313176245,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 354.791,
            "range": "± 46.3586",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32d135955f85b8eb90c59328d316a5cc0c19c2f1",
          "message": "CXXCBC-92: copy first error code and message into error context (#124)",
          "timestamp": "2022-01-27T21:00:40Z",
          "tree_id": "2447ce9b19f163b5e7e0ac22e1f780b0c59fc35d",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/32d135955f85b8eb90c59328d316a5cc0c19c2f1"
        },
        "date": 1643318161731,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 354.726,
            "range": "± 104.67",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a115c198e42d1e2b87f01f6554fd8d51fca487b7",
          "message": "SDKQE-2529: Don't run analytics tests on 5.5 (#125)\n\nCo-authored-by: Brett Lawson <brett19@gmail.com>",
          "timestamp": "2022-01-28T06:46:55Z",
          "tree_id": "d6c5023fc5ab3ebc950577d3c6c278ba85cb3c0b",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/a115c198e42d1e2b87f01f6554fd8d51fca487b7"
        },
        "date": 1643353330585,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 359.508,
            "range": "± 77.0439",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb94d7c13a278f5768bb5075af11644c05a23b63",
          "message": "Fixed issue with immutability of handler for close callback. (#126)\n\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2022-01-28T07:22:34Z",
          "tree_id": "a4ff74c0c7020f70a558900cf162e0f32237ff8c",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/bb94d7c13a278f5768bb5075af11644c05a23b63"
        },
        "date": 1643355554702,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 365.474,
            "range": "± 77.2655",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b949b4bd9f96cba7e2a4bbd2d63ba0a4beab0642",
          "message": "CXXCBC-58: do not use nodes ejected during rebalance (#116)\n\nCo-authored-by: Brett Lawson <brett19@gmail.com>",
          "timestamp": "2022-01-28T08:07:02Z",
          "tree_id": "1c7a440c731a53b905310c91e82214ade3af4fb1",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/b949b4bd9f96cba7e2a4bbd2d63ba0a4beab0642"
        },
        "date": 1643358079083,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 350.18,
            "range": "± 38.2379",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04c161acb0b59203fa5709fe37c8b5e694562bbb",
          "message": "CXXCBC-92: add test to clarify retrying on kv_locked (#127)",
          "timestamp": "2022-01-28T09:23:10Z",
          "tree_id": "ea9a14d9cc895521d6429237a3ee123160082d60",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/04c161acb0b59203fa5709fe37c8b5e694562bbb"
        },
        "date": 1643362615772,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 331.348,
            "range": "± 29.2178",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df11990a9785b6697ee7a3d138cf2c0672038247",
          "message": "extract utility function for translation of query error codes (#128)\n\n* extract utility function for translation of query error codes\r\n\r\n* extract utility function for translation of analytics error codes\r\n\r\n* extract utility function for translation of search error codes",
          "timestamp": "2022-01-28T19:28:01Z",
          "tree_id": "2345dac0d23d9389560a5f41eeed00b2a404c436",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/df11990a9785b6697ee7a3d138cf2c0672038247"
        },
        "date": 1643399000849,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 363.952,
            "range": "± 65.097",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d088012deac9ead86ef1cefaa0f462bffa8f3cab",
          "message": "CXXCBC-106, CXXCBC-105: propagate mutate_in field status as response error code (#129)",
          "timestamp": "2022-02-02T06:13:36Z",
          "tree_id": "db1987fc136a75e8d750c290ee1a4c5b394cb286",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/d088012deac9ead86ef1cefaa0f462bffa8f3cab"
        },
        "date": 1643783566883,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 481.263,
            "range": "± 106.048",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b74b0a82abf2d45b8c323337d2bcc67b129323d1",
          "message": "SDKQE-2573: Wait for scope to be created before creating collection (#131)\n\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2022-02-02T16:16:07Z",
          "tree_id": "7688b8a3b9e403462a1c6d5526f37fd495fb47e4",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/b74b0a82abf2d45b8c323337d2bcc67b129323d1"
        },
        "date": 1643819482528,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 355.767,
            "range": "± 52.1428",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b985e973396fd857c50a5a5de6e73506e05c73d5",
          "message": "SDKQE-2574: Retry get user after create user until it exists (#132)\n\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2022-02-02T16:42:31Z",
          "tree_id": "4e9d9b8a29c32a32420b4c7aa1add2fe49ce56e7",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/b985e973396fd857c50a5a5de6e73506e05c73d5"
        },
        "date": 1643821326887,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 602.911,
            "range": "± 929.091",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ce680cc940c92aef46f40b9ce199511a22ad820",
          "message": "CXXCBC-99: allow to wrappers to extend user_agent string (#134)",
          "timestamp": "2022-02-03T13:08:55-08:00",
          "tree_id": "8f038e201151060892bfd6c75394dba395c0a47f",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/3ce680cc940c92aef46f40b9ce199511a22ad820"
        },
        "date": 1643923601088,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 474.632,
            "range": "± 190.263",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f15184688be631bf4d20c67163416329a082720b",
          "message": "CXXCBC-123: substitute $HOST in the configuration (#135)",
          "timestamp": "2022-02-07T11:05:29Z",
          "tree_id": "37808a71d2862d7afaf2cae972c565ba6d46c0d8",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/f15184688be631bf4d20c67163416329a082720b"
        },
        "date": 1644232807114,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 350.062,
            "range": "± 65.3333",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b7e1e7a0e7f254949f69dc2c6c03246eb34a97f",
          "message": "SDKQE-2574: Retry management operations on expected errors (#136)\n\nBecause the management APIs are async, some not found errors are expected occasionally. Retry these errors when they occur.",
          "timestamp": "2022-02-08T12:00:54Z",
          "tree_id": "e9a4fd2581c2c9768963e2d72cbaa8095ae2cebe",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/5b7e1e7a0e7f254949f69dc2c6c03246eb34a97f"
        },
        "date": 1644322596886,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 600.134,
            "range": "± 1.01906",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d77d0e7a6c0a9a6cf1696e30ef592576865fdd2e",
          "message": "CXXCBC-122: use custom request timeout if user has specified it (#138)",
          "timestamp": "2022-02-08T17:29:52Z",
          "tree_id": "ad342067674f64363f1a3023a4edbf287aa1e6a9",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/d77d0e7a6c0a9a6cf1696e30ef592576865fdd2e"
        },
        "date": 1644342372383,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 359.228,
            "range": "± 66.58",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "427e4e24beae68598a684b82f969697ba28332c4",
          "message": "cleanup configuration parser (#137)",
          "timestamp": "2022-02-08T18:15:34Z",
          "tree_id": "40f2fcd39d52f5275a3dee1a87a26ad4d0846426",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/427e4e24beae68598a684b82f969697ba28332c4"
        },
        "date": 1644345265635,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 516.44,
            "range": "± 181.163",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48f2e4cc7849f3be01019449cd065e13a5556b12",
          "message": "CXXCBC-107: fail all operations executed on closed cluster (#139)",
          "timestamp": "2022-02-08T18:50:02Z",
          "tree_id": "628c28a0a24faaae54209bd8617675ca7f470c3c",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/48f2e4cc7849f3be01019449cd065e13a5556b12"
        },
        "date": 1644347070468,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 341.957,
            "range": "± 37.6551",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "feb9e1f797d6c0a98d4aa6b932e6ed4af272f5e2",
          "message": "CXXCBC-90: make http parsing thread safe (#140)\n\n* CXXCBC-90: make http parsing thread safe\r\n\r\n* extra info about deadlocks found by tsan\r\n\r\n* CXXCBC-90: fix potential deadlock by reducing scope of the locks",
          "timestamp": "2022-02-08T20:13:12Z",
          "tree_id": "c5746047712f5d3d39a9c151f21a5b29e6275319",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/feb9e1f797d6c0a98d4aa6b932e6ed4af272f5e2"
        },
        "date": 1644352128103,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 365.565,
            "range": "± 157.877",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "850af5d20ef3723d414a7e5219e7d6e6d862cc33",
          "message": "CXXCBC-126: do not assume \"status\" always in analytics response (#141)",
          "timestamp": "2022-02-08T20:16:01Z",
          "tree_id": "2f208935c8e17c866777e1e97d3583f8b37d446e",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/850af5d20ef3723d414a7e5219e7d6e6d862cc33"
        },
        "date": 1644352357104,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 356.764,
            "range": "± 70.6313",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32710cb203177b7567da422af8051cf0a56cac88",
          "message": "CXXCBC-123: Infer this_node when server does not provide it. (#142)",
          "timestamp": "2022-02-08T15:31:24-08:00",
          "tree_id": "bc4ab9625f57330f9cc80aa9c27190217e48d013",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/32710cb203177b7567da422af8051cf0a56cac88"
        },
        "date": 1644364120361,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 431.384,
            "range": "± 136.299",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd91c5bfe49953184db050db03fa181df257a281",
          "message": "CXXCBC-128: fix build on Windows (#143)\n\n* fix windows build\r\n\r\n* rollback to std::function\r\n\r\n* provide simpler wrapper for movable std::function\r\n\r\n* do not complain about getenv() in test code\r\n\r\n* remove unused variable\r\n\r\n* fix build script\r\n\r\n* avoid double to int64_t conversion\r\n\r\n* disable pragma warning for asio\r\n\r\n* suppress progress for 'choco install'\r\n\r\n* help std::optional infer type\r\n\r\n* fix type conversion for http_session_manager\r\n\r\n* disable MSVC warning 4242, that is triggered in ASIO\r\n\r\n* back_inserter -> back_insert_iterator\r\n\r\n* MSVC complains on correct usage of std::tolower\r\n\r\n* replace unsafe sscanf\r\n\r\n* missing include for iterator and replace unsafe sprintf\r\n\r\n* port find_files_with_prefix for windows\r\n\r\n* restore old shell script\r\n\r\n* Fix issues with bigobj and bcrypt.lib.\r\n\r\n* Don't build as a shared library.\r\n\r\n* link std::filesystem (necessary on CentOS 8)\r\n\r\nCo-authored-by: Brett Lawson <brett19@gmail.com>",
          "timestamp": "2022-02-10T11:00:25Z",
          "tree_id": "4966d9dfec39f69dbb4228d2aa420e4c01353daa",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/dd91c5bfe49953184db050db03fa181df257a281"
        },
        "date": 1644491675660,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 340.512,
            "range": "± 74.1206",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08e0a41a00bec91d15dcb8c5da4ba9def52651f9",
          "message": "use shared pointers for metrics collector (#147)",
          "timestamp": "2022-02-11T15:47:45Z",
          "tree_id": "b1654cb8f0fa67f3941bcea2b6f9543317272ede",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/08e0a41a00bec91d15dcb8c5da4ba9def52651f9"
        },
        "date": 1644595337145,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 387.609,
            "range": "± 408.577",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6533348c57e903964898da2ab47ea1487aacec4e",
          "message": "Fixed bootstrapping to support non-copyable handlers. (#146)\n\n* Fixed additional methods to support non-copyable handlers.\r\n\r\n* Workaround copyability problem for movable_function.\r\n\r\n* use easier-to-remember env var for test logger\r\n\r\n* Disable construction of cluster object on the stack\r\n\r\n    Force to use std::shared_ptr to prolong life time of the cluster until\r\n    all operations are properly completed\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2022-02-11T18:45:08Z",
          "tree_id": "fd6d3a4b9e446ea4e94036ef5fd7745aa969700b",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/6533348c57e903964898da2ab47ea1487aacec4e"
        },
        "date": 1644605916212,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 318.618,
            "range": "± 198.07",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5aefcd5ea44cc1539c21af0d5bbc52c76584ea82",
          "message": "Fixed issue with http sessions being moved before send completion. (#148)",
          "timestamp": "2022-02-11T12:10:46-08:00",
          "tree_id": "fa22b7bf04cda8dfe0831f7b9a2cb0380cf237b1",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/5aefcd5ea44cc1539c21af0d5bbc52c76584ea82"
        },
        "date": 1644611239423,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 402.376,
            "range": "± 469.487",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dddd81e1abbd095e66743c9c7a7c878891c6dcde",
          "message": "Fix windows compiler warning in dirutils. (#149)",
          "timestamp": "2022-02-11T13:59:59-08:00",
          "tree_id": "a29bb30eca9769658bdcc8adc3dadb6853911b5f",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/dddd81e1abbd095e66743c9c7a7c878891c6dcde"
        },
        "date": 1644617708898,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 380.423,
            "range": "± 355.056",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2e70c38f7539d2ecc73d2f0aad6f77329a13ef27",
          "message": "CXXCBC-134: Close stream before attempting to connect to next endpoint (#151)",
          "timestamp": "2022-02-14T15:08:24Z",
          "tree_id": "680a301fcca60366ebb52c609155f551e34f6b1c",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/2e70c38f7539d2ecc73d2f0aad6f77329a13ef27"
        },
        "date": 1644852375968,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 458.271,
            "range": "± 850.625",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "517fe129b5fa15b4a82ae7d4f1dbb63e438f230b",
          "message": "Fix issue with Internal Compiler Error on VS 2019. (#152)",
          "timestamp": "2022-02-14T11:46:48-08:00",
          "tree_id": "03e405325aacbc729e4c89aa38fc32efe93c0c33",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/517fe129b5fa15b4a82ae7d4f1dbb63e438f230b"
        },
        "date": 1644868957213,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 345.589,
            "range": "± 48.431",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eee07b290c93b1cb29d03166bb2cf7d2893fc70a",
          "message": "CXXCBC-135: Don't read past end of buf in mcbp_parser (#153)",
          "timestamp": "2022-02-15T13:42:30Z",
          "tree_id": "ebbf77f66befb7c1416f8904169fd9a1e3cf3a83",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/eee07b290c93b1cb29d03166bb2cf7d2893fc70a"
        },
        "date": 1644933493758,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 349.63,
            "range": "± 246.73",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69dacfd050818a20e829a6714c27577868a13c8e",
          "message": "Fix windows integration test crash (#154)\n\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2022-02-15T14:17:44Z",
          "tree_id": "7556a48fb05673d688700b3cbb2130df859199b2",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/69dacfd050818a20e829a6714c27577868a13c8e"
        },
        "date": 1644935505068,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 306.314,
            "range": "± 65.2249",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0992b6f693366bb0481d3ebaed4f57bc8ef11882",
          "message": "Fix config updates during rebalance (#150)\n\n* KV loader tool\r\n\r\n* CXXCBC-130, CXXCBC-58. Fix configuration updates during rebalance\r\n\r\n* cancel MCBP timers before invoking the callback\r\n\r\n* protect configuration\r\n\r\n* swap handler before invocation\r\n\r\n* use locks to access config in http_session_manager",
          "timestamp": "2022-02-16T07:20:38Z",
          "tree_id": "b9cda4a455bb481ac0ce2e4e9fa6c24d5c36f7f2",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/0992b6f693366bb0481d3ebaed4f57bc8ef11882"
        },
        "date": 1644997280550,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 504.534,
            "range": "± 98.6509",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04d9e691cdd6c3235de045f10ca159f20977f9b8",
          "message": "update asio to 1.21.0 (#155)",
          "timestamp": "2022-02-16T12:55:30Z",
          "tree_id": "091e4da9526a881d684426937ca7e9ee87d2d97b",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/04d9e691cdd6c3235de045f10ca159f20977f9b8"
        },
        "date": 1645017252882,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 442.828,
            "range": "± 87.1517",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8e1a9a32e498ed025110f52db7b28e89ee1db60",
          "message": "CXXCBC-58, CXXCBC-72: notify HTTP manager about config updates (#156)",
          "timestamp": "2022-02-16T17:31:23Z",
          "tree_id": "f4c5b5f0d557f3b8cc03b95ed6f23c2c407dadc8",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/f8e1a9a32e498ed025110f52db7b28e89ee1db60"
        },
        "date": 1645033899440,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 564.3,
            "range": "± 864.78",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f971d8296842153bdfdb07634088c2e2d97c5ba",
          "message": "CXXCBC-58, CXXCBC-72: release bootstrap connection, fix config update condition (#157)",
          "timestamp": "2022-02-16T20:11:34Z",
          "tree_id": "6eb7803b2c90873ad3e3d060d84d319f60fb8471",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/7f971d8296842153bdfdb07634088c2e2d97c5ba"
        },
        "date": 1645043500061,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 464.14,
            "range": "± 59.7604",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "06e92c4980a788aa220d6a48057606322d774804",
          "message": "create socket in stream as shared_ptr (#158)",
          "timestamp": "2022-02-16T21:28:39Z",
          "tree_id": "67d6d373183648b5b768c90abeae2bdd4556264d",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/06e92c4980a788aa220d6a48057606322d774804"
        },
        "date": 1645047756361,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 307.134,
            "range": "± 48.7433",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b10a9262f31f2e6c6927c9650361b1107a8b4b9",
          "message": "CXXCBC-137: fix tracing segfault in MCBP command (#160)",
          "timestamp": "2022-02-17T15:28:07Z",
          "tree_id": "b8925dcb1028a32708bcf114e75d9b23879f264a",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/6b10a9262f31f2e6c6927c9650361b1107a8b4b9"
        },
        "date": 1645112540209,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 303.384,
            "range": "± 28.1314",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "757d07cb7263bd1becb20a6b6841d7f5d926fe0b",
          "message": "CXXCBC-138: protect HTTP round-robin index with mutex (#161)",
          "timestamp": "2022-02-17T18:54:35Z",
          "tree_id": "5581b7ca79c7d9ab4863c2ea7ca574cc716f0898",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/757d07cb7263bd1becb20a6b6841d7f5d926fe0b"
        },
        "date": 1645124843729,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 322.153,
            "range": "± 430.769",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "944e682534c3e720cb2e78f1338a839cd34e1f5c",
          "message": "Retry groups get all until group created (#163)",
          "timestamp": "2022-02-18T16:17:36Z",
          "tree_id": "19997de40d4beb72b5a98173f3bf520b10f2dc30",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/944e682534c3e720cb2e78f1338a839cd34e1f5c"
        },
        "date": 1645202299604,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 556.131,
            "range": "± 305.77",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f07e53352d9ec76bb4c8ed612f19f03e2cac784",
          "message": "Fix issue where close() during open_bucket() can segfault. (#164)",
          "timestamp": "2022-02-18T14:29:04-08:00",
          "tree_id": "98876d486a80e5054ed839e483558d76594a6154",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/7f07e53352d9ec76bb4c8ed612f19f03e2cac784"
        },
        "date": 1645224428721,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 473.301,
            "range": "± 831.734",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b450d1add0987ce33406e858c0034e9aa02781e",
          "message": "CXXCBC-124: remove status code validity assertion from protocol parser (#165)\n\nUnknown status codes will be handled using error map",
          "timestamp": "2022-02-22T13:14:10Z",
          "tree_id": "0fa29f07aa447f6667ad33ca271fca7041d670ce",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/5b450d1add0987ce33406e858c0034e9aa02781e"
        },
        "date": 1645536917005,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 536.933,
            "range": "± 223.348",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      }
    ],
    "Cheshire Cat": [
      {
        "commit": {
          "author": {
            "name": "couchbaselabs",
            "username": "couchbaselabs"
          },
          "committer": {
            "name": "couchbaselabs",
            "username": "couchbaselabs"
          },
          "id": "d87b5ed2dba230ea74c8120143a2fb781e834314",
          "message": "add benchmarking infrastructure",
          "timestamp": "2021-11-03T20:04:35Z",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/pull/32/commits/d87b5ed2dba230ea74c8120143a2fb781e834314"
        },
        "date": 1635978622926,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 392.577,
            "range": "± 66.5826",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d3097adf06225768fbe57e1a5a87752553bbe95",
          "message": "add benchmarking infrastructure (#32)",
          "timestamp": "2021-11-08T17:08:04Z",
          "tree_id": "78072287b54e8c1737b759031d0d60ed9fe585ed",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/7d3097adf06225768fbe57e1a5a87752553bbe95"
        },
        "date": 1636392712232,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 377.781,
            "range": "± 48.0308",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51ad42064fa5153bdd2cf7428e5fb74df7ae995e",
          "message": "CXXCBC-25: keep scope and collection separate in document_id (#36)",
          "timestamp": "2021-11-08T18:26:02Z",
          "tree_id": "c46363b243420e50dad44b3d20596b6d14762d65",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/51ad42064fa5153bdd2cf7428e5fb74df7ae995e"
        },
        "date": 1636397165955,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 579.897,
            "range": "± 644.496",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04a826d7711b7353eec1254c0f92d5479138f803",
          "message": "represent CAS as type instead of std::uint64_t (#35)",
          "timestamp": "2021-11-08T18:53:33Z",
          "tree_id": "ceccd1f4a16b423ecee69aedfd1761c47934f0cd",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/04a826d7711b7353eec1254c0f92d5479138f803"
        },
        "date": 1636398565047,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 407.177,
            "range": "± 727.165",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0aae6af8c075961141fa10deaa8653f5f111ba75",
          "message": "restructuring test helpers (#40)\n\n* Add integration test helper class\r\n\r\nAdd a helper class that correctly cleans up asio on tear down. When using sections this prevents a single test failure skipping tests defined in later sections\r\n\r\n* restructure test helpers\r\n\r\nCo-authored-by: Jake Rawsthorne <jake.rawsthorne@couchbase.com>",
          "timestamp": "2021-11-10T17:58:43Z",
          "tree_id": "3870453934af81995959f7546b82ba414f5f5671",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/0aae6af8c075961141fa10deaa8653f5f111ba75"
        },
        "date": 1636568074300,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 361.859,
            "range": "± 128.897",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "935b86f676856c3026f4ce6fffe5b77bc59aa724",
          "message": "default constructor for document_id (#38)",
          "timestamp": "2021-11-10T18:58:42Z",
          "tree_id": "e3af097580382c9f34240ec29f42ab98e7e87e88",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/935b86f676856c3026f4ce6fffe5b77bc59aa724"
        },
        "date": 1636571832751,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 427.672,
            "range": "± 51.9352",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "519f6dd1661156011f6d6204e1e024c884b67822",
          "message": "Fix flaky bucket management test (#41)\n\nAdd test helpers that wait for an arbitrary condition\r\nAdd test helper that waits for a bucket to become healthy",
          "timestamp": "2021-11-12T15:41:26Z",
          "tree_id": "450ae34accca2233b3a5ccccb6d60a5349d2dba2",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/519f6dd1661156011f6d6204e1e024c884b67822"
        },
        "date": 1636732817733,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 476.827,
            "range": "± 96.0022",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca933ba3375e8cf9cbf0a0ae72f6059fe88a259a",
          "message": "SDKQE-2482: Port arithmetic integration tests from lcb (#42)",
          "timestamp": "2021-11-12T15:40:11Z",
          "tree_id": "96455c35f20949987b1ae82e53cdbcbd3cc4fb60",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/ca933ba3375e8cf9cbf0a0ae72f6059fe88a259a"
        },
        "date": 1636732875074,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 522.283,
            "range": "± 158.91",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f75eb7e041f0df46e99dce8cb98a8c37076de586",
          "message": "fix build on MacOS (#47)",
          "timestamp": "2021-11-15T11:04:38Z",
          "tree_id": "0811455f5043f061ab6dc979da3b0a9b0f4580cd",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/f75eb7e041f0df46e99dce8cb98a8c37076de586"
        },
        "date": 1636975278991,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 439.271,
            "range": "± 574.369",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d067614d62dc20a9673dbe8d175b307cdd08bc9a",
          "message": "add missing header (#46)\n\ngcc 11 complains that <optional> is not included yet in\r\nconfiguration.hxx",
          "timestamp": "2021-11-15T11:04:56Z",
          "tree_id": "8af04398e8dc03818857a5d2da2bf054d2e96ce7",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/d067614d62dc20a9673dbe8d175b307cdd08bc9a"
        },
        "date": 1636975356240,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 354.131,
            "range": "± 75.4292",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3c0d9beb7b45ae550e3b355ee8a1a8a174d7758",
          "message": "SDKQE-2484: Port CRUD tests from libcouchbase (#44)\n\n* display test output on failure\r\n* implement shortcut check for exists_response\r\n* port mutation integration tests from lcb\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-11-15T13:26:40Z",
          "tree_id": "3cd2d2e8ec0c04f612f4dbf4d2d142b933fffffe",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/e3c0d9beb7b45ae550e3b355ee8a1a8a174d7758"
        },
        "date": 1636983952074,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 496.393,
            "range": "± 630.163",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07d3b4815f76d956cb08cf5420f37fa6274679f5",
          "message": "Skip durability tests on older server versions (#48)",
          "timestamp": "2021-11-15T13:51:22Z",
          "tree_id": "9771506456a0ec2a98907b1bc56aed476b1ba705",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/07d3b4815f76d956cb08cf5420f37fa6274679f5"
        },
        "date": 1636985543748,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 556.622,
            "range": "± 209.181",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b9a9bbca9f98c37ba70122f1fd3d33c1f9351f6",
          "message": "CXXCBC-28: switch exists operation to get_meta (#49)",
          "timestamp": "2021-11-15T18:06:19Z",
          "tree_id": "20787e4a341e4f826c6b5492ce511a36731d44cf",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/0b9a9bbca9f98c37ba70122f1fd3d33c1f9351f6"
        },
        "date": 1637000612311,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 352.396,
            "range": "± 59.8123",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a43d22ff519f4f62ad2c3f85d9122db96acaefa8",
          "message": "fix move semantics for handlers (#45)\n\nin particular, allow to use lambdas that capture move-only objects as\r\noperation handlers",
          "timestamp": "2021-11-17T17:56:24Z",
          "tree_id": "019754ba279318fdf592e79d54218a799aa92255",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/a43d22ff519f4f62ad2c3f85d9122db96acaefa8"
        },
        "date": 1637172913324,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 507.206,
            "range": "± 691.485",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1128790d371b9aefd047ca08de603a64daf16ead",
          "message": "SDKQE-2483: Port collections tests from lcb (#43)\n\n* SDKQE-2483: Port collections tests from lcb\r\n* update retry reasons of the original request when collection is missing\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-11-18T18:42:50Z",
          "tree_id": "e03b2ac62c67763215a3e6576a52262988b3bfc0",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/1128790d371b9aefd047ca08de603a64daf16ead"
        },
        "date": 1637262310111,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 491.6,
            "range": "± 242.994",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3eb2d3d2d3d9f171c74ae7117362a995f39ce33d",
          "message": "explicitly assign values to errors (#54)\n\n1. RFC has these codes specified, so it would be better if we use them,\r\n   because our errors are basically numeric values.\r\n\r\n2. Output operator for std::error_code uses bare integer value instead\r\n   of message, and it will be easier to search for codes in the sources.",
          "timestamp": "2021-11-19T18:28:59Z",
          "tree_id": "ccca2e8691a57c25f2e54ab7c7d52c6414160ecb",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/3eb2d3d2d3d9f171c74ae7117362a995f39ce33d"
        },
        "date": 1637347756616,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 441.306,
            "range": "± 74.4981",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "470f8f136961bd06e13a0b46f883cc1c92a47731",
          "message": "SDKQE-2487: Port N1QL query tests from lcb (#50)\n\n* SDKQE-2487: Port N1QL query tests from lcb\r\n\r\n* Capture debug logs during ci\r\n\r\n* log reponse body on unexpected error from query engine\r\n\r\n* switch sanitizers on github actions to server 7.0.2\r\n\r\n* use multi-threaded logger for stderr in the tests\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-11-19T18:28:42Z",
          "tree_id": "f2947419edd80a44353c3d3ada4bd7859b45608d",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/470f8f136961bd06e13a0b46f883cc1c92a47731"
        },
        "date": 1637347847134,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 598.499,
            "range": "± 784.265",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8e5d4b291fca6b841751f76c7f8b45c6ff58384",
          "message": "ensure MCBP session closure when topology changes (#53)",
          "timestamp": "2021-11-19T18:45:48Z",
          "tree_id": "791183871a00856cd851e84c596ece9834b2f394",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/e8e5d4b291fca6b841751f76c7f8b45c6ff58384"
        },
        "date": 1637348974024,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 575.247,
            "range": "± 754.393",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffe4b3ad172dd47920eece4bd58f1f3162453afa",
          "message": "SDKQE-2489: Port subdoc tests from lcb (#51)\n\n* SDKQE-2489: Port subdoc tests from lcb\r\n\r\n* detect empty paths and swap op codes for full doc operations\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-11-19T20:19:30Z",
          "tree_id": "4e4448743f70794e17b340ba7686b41a5d0abd0f",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/ffe4b3ad172dd47920eece4bd58f1f3162453afa"
        },
        "date": 1637354259899,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 357.239,
            "range": "± 44.1614",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "03931a60269ae76a56c1fab94dece8ee51013471",
          "message": "SDKQE-2496: Add collection management test (#57)",
          "timestamp": "2021-11-23T18:23:25Z",
          "tree_id": "d3f0f8fe2ca9dfbaa4cd72bdf721c6b4c1ba6a6f",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/03931a60269ae76a56c1fab94dece8ee51013471"
        },
        "date": 1637692950124,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 409.082,
            "range": "± 1.00286",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa3d5eb24643fb2488e7345fa1e7e12f8ddf7f42",
          "message": "SDKQE-2495: Temporarily add sleep after scope and collection changes (#55)\n\nThe collection manifest can be partially propagated in a multi node cluster. Until all nodes can be checked, add a sleep after create/drop",
          "timestamp": "2021-11-23T18:22:44Z",
          "tree_id": "8a510a19214f953af6dbf5ac56eafd5f5d8e9d70",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/fa3d5eb24643fb2488e7345fa1e7e12f8ddf7f42"
        },
        "date": 1637693213373,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 542.368,
            "range": "± 212.791",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc41e507d552ac29e1ea7feccb452b91654fb01f",
          "message": "add cxx_function header into public includes (#59)",
          "timestamp": "2021-11-23T12:07:23-07:00",
          "tree_id": "ae70712c6f7ff798fc560a9a4bf7754e5340ea61",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/cc41e507d552ac29e1ea7feccb452b91654fb01f"
        },
        "date": 1637695910393,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 890.701,
            "range": "± 1.67716",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c997ec0ffed3da7a77c667f758af2fb971cd2b8b",
          "message": "add more overloads for JSON parser wrapper (#60)",
          "timestamp": "2021-11-23T19:36:35Z",
          "tree_id": "11498f8c3cd8fbcffd06299b9cfeadecd88964d6",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/c997ec0ffed3da7a77c667f758af2fb971cd2b8b"
        },
        "date": 1637697437638,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 422.98,
            "range": "± 73.7437",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c101b7235b71684a1a1631d14fca95c6281a93f8",
          "message": "SDKQE-2497: Add user management tests (#58)\n\n* CXXCBC-20: Fix group_get_all returning internal_server_failure\r\n\r\n* CXXCBC-33: Fix auth domain formatting in request path\r\n\r\n* SDKQE-2497: Add user management tests",
          "timestamp": "2021-11-24T19:41:54Z",
          "tree_id": "ecc6aaf58a1a9e3ae02fe20ee6a7b0df415d0d4f",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/c101b7235b71684a1a1631d14fca95c6281a93f8"
        },
        "date": 1637784246279,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 491.803,
            "range": "± 93.1176",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "025f8f27f7772cb93269cb5e4d24149e49cc1551",
          "message": "fix snappy compression of the value (#62)\n\nWhen the value was compressed, the body length and datatype fields were\r\nnot updated because of non-reference argument. The patch improves API a\r\nbit, and modification of the packet done by the caller now.",
          "timestamp": "2021-11-24T20:24:30Z",
          "tree_id": "5ea50e28c8f0988db83ee2d7a8d9906ce0ccf67b",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/025f8f27f7772cb93269cb5e4d24149e49cc1551"
        },
        "date": 1637786574049,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 331.041,
            "range": "± 58.7128",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9c436d9837d6591b074091a2d7086df735bd4e70",
          "message": " SDKQE-2499: Add query index management tests (#61)\n\n* Fix error code for index not found\r\n\r\n* SDKQE-2499: Add query index management tests\r\n\r\n* Use raw strings in queries instead of escaping\r\n\r\n* fix comment on the error code\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-11-24T20:24:57Z",
          "tree_id": "42fa53015606775ee9f3ef621a8fb351d40b8515",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/9c436d9837d6591b074091a2d7086df735bd4e70"
        },
        "date": 1637786636332,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 370.421,
            "range": "± 70.6457",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c1f50427b547ef375e29637b12b293878c3db970",
          "message": "SDKQE-2474: Expand bucket management integration tests (#56)\n\n* CXXCBC-21: Fix error message when flushing a bucket with flush disabled\r\n\r\n* CXXCBC-23: Fix create memcached bucket\r\n\r\n* CXXCBC-24: Fix create ephemeral bucket\r\n\r\n* SDKQE-2474: Expand bucket management integration tests\r\n\r\n* fix memory leak associated with restarting MCBP session\r\n\r\n* fix session restart\r\n* introduce close_bucket API to stop background session reconnection\r\n* fixed memory leak\r\n\r\n* fix issue found by thread sanitizer\r\n\r\n* fix TODO item about getting number of nodes from the cluster\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-11-25T16:15:07Z",
          "tree_id": "8f1bfa8d01f5b6db66f9daa083bc376681a3a4f2",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/c1f50427b547ef375e29637b12b293878c3db970"
        },
        "date": 1637858077339,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 371.447,
            "range": "± 58.6647",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "77faff6803212303017a27b4d09a47815a5be765",
          "message": "use mutex lock when using buckets map (#52)",
          "timestamp": "2021-11-26T07:17:38Z",
          "tree_id": "31184f08ff1a134ddee8b35ad99eeb8c043c8d2e",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/77faff6803212303017a27b4d09a47815a5be765"
        },
        "date": 1637912093213,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 356.629,
            "range": "± 392.2",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a9cc37a8c373f52bde9e50b7f573b0cb1242351",
          "message": "CXXCBC-47: improve client side error message when TLS is enforced on the server side (#63)",
          "timestamp": "2021-11-29T17:33:10Z",
          "tree_id": "c2869b261b3cdb86d8ee04b0c2fe3aff60a583f1",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/7a9cc37a8c373f52bde9e50b7f573b0cb1242351"
        },
        "date": 1638208348937,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 398.395,
            "range": "± 260.634",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c747dda909e289ed9266347c1b3e83c02b9c2cf0",
          "message": "tests: try to detect cluster version using REST API (#66)\n\nfallback to version from environment only if the cluster does not agree\r\non version or returns invalid version string",
          "timestamp": "2021-11-29T19:07:48Z",
          "tree_id": "1b5f347be8448dd901cc1173b202df4304ead457",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/c747dda909e289ed9266347c1b3e83c02b9c2cf0"
        },
        "date": 1638213950088,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 308.342,
            "range": "± 42.7143",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "820b28c6e21871b9cc4a3af53388435708c17abe",
          "message": "do not log empty metrics report (#67)",
          "timestamp": "2021-11-30T19:00:41Z",
          "tree_id": "f430fd30815ba0ff3bb1e5cbff6e3d3ec448c5d7",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/820b28c6e21871b9cc4a3af53388435708c17abe"
        },
        "date": 1638300030791,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 363.352,
            "range": "± 63.4252",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00a3a49015436daea60ab663dc83de3ea66db10a",
          "message": "initiate reads only after all HTTP buffers has been written (#69)",
          "timestamp": "2021-11-30T19:01:03Z",
          "tree_id": "daae287dd47b4c781e2b664c11bb59e1070ee4ea",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/00a3a49015436daea60ab663dc83de3ea66db10a"
        },
        "date": 1638300036545,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 384.635,
            "range": "± 100.955",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "88a6a4cf3ed666f927f3c592f54ef55cf461b7cc",
          "message": "Skip group and query index management tests on older server versions (#64)",
          "timestamp": "2021-11-30T19:01:38Z",
          "tree_id": "4bc23b69aa99d4835c0c74abdc3a156632ca6a39",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/88a6a4cf3ed666f927f3c592f54ef55cf461b7cc"
        },
        "date": 1638300095541,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 432.796,
            "range": "± 601.095",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "437e0e7b822de574f2e2c29b101aa20ac0d01952",
          "message": "Fix live cluster version parse (#72)\n\nCluster version appends -edition. Account for this and parse it so we can test community edition\r\nFix neo version to apply to all future versions",
          "timestamp": "2021-12-01T12:12:21Z",
          "tree_id": "6d50d3b4994a80955f7a2bd2665c5bfe5fd20c42",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/437e0e7b822de574f2e2c29b101aa20ac0d01952"
        },
        "date": 1638362216822,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 561.108,
            "range": "± 364.986",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43e1df046ae7b646f4c22cb2e23dc0d2d73e8170",
          "message": " SDKQE-2500: Add analytics management integration tests (#70)\n\n* Fix if not exists clause order in analytics_index_create\r\n\r\n* Fix compound dataverse name in analytics_index_create\r\n\r\n* Fix path_escape by using the correct encoding type\r\n\r\n* Fix parameter encoding in analytics_link_get_all\r\n\r\n* SDKQE-2500: Add analytics management integration tests\r\n\r\n* CXXCBC-49: always cancel command timers when invoking handlers\r\n\r\n* More version fixes.\r\n\r\nSupport cluster describe on older versions, skip nodeUUID.\r\nOpen bucket if cluster describe fails with service_not_available in load_cluster_info.\r\nAdd more feature flags for analytics\r\n\r\n* do not use 'this' pointer on deleted handler\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-12-01T16:29:42Z",
          "tree_id": "4ce60114cfecf11f95751b19a9f9145338ca0006",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/43e1df046ae7b646f4c22cb2e23dc0d2d73e8170"
        },
        "date": 1638377398158,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 405.833,
            "range": "± 41.6897",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5fb2a7b3ecfaa6255adcb7993b786499cb1548a6",
          "message": "CXXCBC-29: add storage option for bucket manager (#68)",
          "timestamp": "2021-12-01T17:20:32Z",
          "tree_id": "f632e3abde452b9237e1e11f03cc2872019ddd88",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/5fb2a7b3ecfaa6255adcb7993b786499cb1548a6"
        },
        "date": 1638380269104,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 317.677,
            "range": "± 46.872",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a8276bc7069db464d3d48f9c2a733d1ce6028fa",
          "message": "CXXCBC-19: handle rate and quota limit error codes (#71)",
          "timestamp": "2021-12-01T17:47:27Z",
          "tree_id": "d81b4b961a9436c87f745214ac34562ded7882a4",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/4a8276bc7069db464d3d48f9c2a733d1ce6028fa"
        },
        "date": 1638382016169,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 380.738,
            "range": "± 174.551",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3b8e098a650d09bd127cb38a5fd5024af07649e",
          "message": "CXXCBC-29: add test for storage backend with ephemeral bucket (#73)",
          "timestamp": "2021-12-01T19:09:05Z",
          "tree_id": "252130d71c3af986fa9a7f2f11ddcc18323327ba",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/f3b8e098a650d09bd127cb38a5fd5024af07649e"
        },
        "date": 1638386962269,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 404.539,
            "range": "± 319.871",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5ab7291a38eeed8b0ba51a98fe5bac5b524b518f",
          "message": "fix tests on jenkins (#78)\n\n* wait for bucket to be created in management tests\r\n\r\n* compare ram_quota with margin, as server is not always precise about it\r\n\r\n* fix draining queue of deferred commands\r\n\r\n* wait for group to be created in management tests\r\n\r\n* increase operation timeout up to 10 seconds for multi-threaded test\r\n\r\n* use mutex to protect bucket's deferred queue\r\n\r\n* added missing includes for basic headers (cstring, algorithm, etc...)\r\n\r\n* add wating condition for bucket update test\r\n\r\n* guard minimum durability tests and allow it only for 6.6+\r\n\r\n* return last response when waiting for bucket creation\r\n\r\n* ignore bucket_not_found errors when creating indexes if it is possible\r\n\r\n* ignore bucket_not_found errors when flushing bucket if it is possible\r\n\r\n* ignore group_not_found errors when upserting the user if it is possible\r\n\r\n* ignore user_not_found errors when upserting the user, if it is possible\r\n\r\nCo-authored-by: Brett Lawson <brett19@gmail.com>",
          "timestamp": "2021-12-15T14:22:22-08:00",
          "tree_id": "5796b856fb79a5584d4a2e69e23060b4f6c2f4a2",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/5ab7291a38eeed8b0ba51a98fe5bac5b524b518f"
        },
        "date": 1639608385045,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 540.15,
            "range": "± 581.734",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "40e9c4132e79c585a7b39b474551e465fd8ffdd8",
          "message": "Updated compiler warnings to not apply outside client and fixed a few minor issues. (#79)\n\n* Updated warnings/sanitizers to only apply when building couchbase++ itself.\r\n\r\n* fixed inconsistent logger function naming\r\n\r\n* fixed incorrect typing for some handler forwards",
          "timestamp": "2021-12-15T15:08:44-08:00",
          "tree_id": "4ef46713e106c3c6355e803819ca4c4e2451801a",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/40e9c4132e79c585a7b39b474551e465fd8ffdd8"
        },
        "date": 1639610843515,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 353.325,
            "range": "± 134.282",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "davidmichaelkelly@gmail.com",
            "name": "David Kelly",
            "username": "davidkelly"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a16bccd8cdef17b3ecd9181828e47a56a49bc76",
          "message": "CXXCBC-60: Collection and Scope Name have 251 character limit (#77)\n\nUsed to be 30, but now it is 251.",
          "timestamp": "2021-12-15T19:49:56-08:00",
          "tree_id": "79a0ca9d4a7eba12301918483014cf10cc7afafc",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/3a16bccd8cdef17b3ecd9181828e47a56a49bc76"
        },
        "date": 1639627702674,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 364.774,
            "range": "± 37.9912",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b97110c79e509dd0cc5ffa392839ecf60fb2da80",
          "message": "Improved build performance and removed unneccessary tao/fmt/spdlog dependencies. (#76)\n\n* reduce dependence on gsl\r\n\r\n* replace usages of fmt::join with utils::join_strings\r\n\r\n* added more missing headers\r\n\r\n* cleaned up all custom fmt formatters\r\n\r\n* use fmt/core rather than entire fmt library\r\n\r\n* removed spdlog usage from logger header\r\n\r\n* cleanup usage of tao throughout codebase\r\n\r\n* use our own version of fmt instead of spdlog bundled version",
          "timestamp": "2021-12-16T05:10:15Z",
          "tree_id": "7f5a446a0a23bce652ea370a6f584873e019d9e5",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/b97110c79e509dd0cc5ffa392839ecf60fb2da80"
        },
        "date": 1639632179057,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 319.07,
            "range": "± 41.9084",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "70e5c5909dec5b7af17f0222adbbd73b35efdf29",
          "message": "ignore group_not_found errors when getting the group if it is possible (#81)",
          "timestamp": "2021-12-16T11:04:45Z",
          "tree_id": "273a7c0474dade6f42dedd56f8ec06376e0c6e6c",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/70e5c5909dec5b7af17f0222adbbd73b35efdf29"
        },
        "date": 1639653490443,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 326.222,
            "range": "± 49.0051",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2257bffa7d7268eeb08fe2e440fd9fabc225f73",
          "message": "handle cluster_map_notification during MCBP session bootstrap (#82)",
          "timestamp": "2021-12-16T12:11:49Z",
          "tree_id": "f3c1f7f6f340d98d3f8f085a135d8c0ed2a337a2",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/d2257bffa7d7268eeb08fe2e440fd9fabc225f73"
        },
        "date": 1639657672519,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 450.979,
            "range": "± 87.4475",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bad0d2f3595d0522129231f0fb16cf8713077b51",
          "message": "fix join_strings for fmt traits (#80)\n\n* fix join_strings for fmt traits\r\n\r\n* add unit test for join_strings_fmt",
          "timestamp": "2021-12-16T12:52:10Z",
          "tree_id": "202f47b7a650a2ac3ebaee2be8f35e67fff323bf",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/bad0d2f3595d0522129231f0fb16cf8713077b51"
        },
        "date": 1639660022151,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 436.233,
            "range": "± 71.5079",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e7608c16f57ffdededcce1d8ef327c09aaff7b4",
          "message": "SDKQE-2432: Support for Multiple Root Certs testing (#75)\n\nAllow passing in a certificate and key path for cert auth testing\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-12-16T13:45:01Z",
          "tree_id": "44103c58657fd93638910093e119d943940111f0",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/3e7608c16f57ffdededcce1d8ef327c09aaff7b4"
        },
        "date": 1639663535151,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 890.609,
            "range": "± 1.54314",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "487062224d247192e0da56a7ca93260f90cc5b4a",
          "message": " SDKQE-2501: Add search index management tests (#65)\n\n* Remove unnecessary index_name from search_index_get_all\r\n\r\n* Fix linking of search_index_get_stats\r\n\r\n* SDKQE-2501: Add search index management tests\r\n\r\n* ensure that index name is never empty\r\n\r\n* prefer version from live cluster in search management tests\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-12-16T14:25:26Z",
          "tree_id": "7811e06de079d3f5d5c6b2387f915fd2a9439e9c",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/487062224d247192e0da56a7ca93260f90cc5b4a"
        },
        "date": 1639665830562,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 546.213,
            "range": "± 914.652",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "842d7205471e4a1d327ed281d2f3db222662a8c3",
          "message": "display HTTP body if bucket_get_all_response cannot be parsed (#84)",
          "timestamp": "2021-12-16T16:42:01Z",
          "tree_id": "dcd25cdcc463d719f5b2ee672c6621ba34914633",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/842d7205471e4a1d327ed281d2f3db222662a8c3"
        },
        "date": 1639673810603,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 386.035,
            "range": "± 52.9429",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "870a99ca882a0220b07f5dae0b55f7790ce5d023",
          "message": "Ignore search index not online errors when analyzing document (#83)",
          "timestamp": "2021-12-16T19:23:55Z",
          "tree_id": "517842c05aa6c8edfb78aca467e8b40d150d8d3a",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/870a99ca882a0220b07f5dae0b55f7790ce5d023"
        },
        "date": 1639683533769,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 402.123,
            "range": "± 384.017",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba87a8cb02872359f97926795fe6ec0c66079c31",
          "message": "CXXCBC-59: load tls verify file (#85)\n\n* CXXCBC-59: load trust_certificate as verify file\r\n\r\n* do not initiate asio operations if the http session has been stopped\r\n\r\n* fix TLS setup for multiple intermediate certificates",
          "timestamp": "2021-12-17T11:13:55Z",
          "tree_id": "f2896156732b7ee694532d7219fbfa05390150ff",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/ba87a8cb02872359f97926795fe6ec0c66079c31"
        },
        "date": 1639740501786,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 354.026,
            "range": "± 45.9166",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8f82c13b844b5eb73ab8cfc9b8c1f15476cb5cf0",
          "message": "Cleaned up includes to adhere to llvm including ordering. (#86)\n\n* fixup all headers\r\n\r\n* added lots of missing headers\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-12-17T12:39:37Z",
          "tree_id": "227fb460e035c040bd9d527c6fc4e687bf9ef639",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/8f82c13b844b5eb73ab8cfc9b8c1f15476cb5cf0"
        },
        "date": 1639745780674,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 596.774,
            "range": "± 691.05",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "50a6e7ddf3db87f20ce017ce54a6f4a501e8f05c",
          "message": "more fixes after include cleanup in 8f82c13b (#87)",
          "timestamp": "2021-12-17T13:19:54Z",
          "tree_id": "6d0f9b1ac6fd63840b3e49d9864cfa09afe96af2",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/50a6e7ddf3db87f20ce017ce54a6f4a501e8f05c"
        },
        "date": 1639747953223,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 312.111,
            "range": "± 38.0777",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "699ae4a96b72ec283a83115167ff4572fc6dde6b",
          "message": "CXXCBC-32: return invalid_argument if bootstrap_nodes is empty (#92)",
          "timestamp": "2021-12-20T17:12:56Z",
          "tree_id": "0cf4f4386f1fd5d0aed09b191781bc33cd497553",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/699ae4a96b72ec283a83115167ff4572fc6dde6b"
        },
        "date": 1640021134822,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 319.01,
            "range": "± 48.9467",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f04117fc3cbd2a0e1e23ec118c181f3514e4170",
          "message": "CXXCBC-44: add ability to perform freeform requests to HTTP services (#90)",
          "timestamp": "2021-12-22T19:59:01Z",
          "tree_id": "67fdc9174f5960ad0bba729fb65a5282201e9554",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/4f04117fc3cbd2a0e1e23ec118c181f3514e4170"
        },
        "date": 1640204071321,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 355.555,
            "range": "± 67.3188",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf615f39f8a0e89d33ae452649d30882f25483fb",
          "message": "Skip tests that don't work in certain configurations (#88)\n\nAnalytics is not supported with magma buckets\r\nAnalytics external link management is not supported with cert auth on versions < 7.1\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-12-23T08:08:30Z",
          "tree_id": "dbe7bc8895dcf04df71db2e5f391822a5ff78820",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/cf615f39f8a0e89d33ae452649d30882f25483fb"
        },
        "date": 1640247780117,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 371.809,
            "range": "± 54.0779",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b78bf9da8131d727fa83195419ef562d2032264",
          "message": "SDKQE-2522: Reduce bucket management test time on older server versions (#91)\n\nWait until a bucket is healthy on all nodes before using it to prevent timeouts during delete caused by MB-48059.\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2021-12-23T09:48:42Z",
          "tree_id": "6d32edcc39fe3ae0b372e87ae41be43d7898eef0",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/5b78bf9da8131d727fa83195419ef562d2032264"
        },
        "date": 1640253718694,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 345.309,
            "range": "± 71.6312",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38a344e50e4f42bc11e23480bcbbab2b7bfddd31",
          "message": "CXXCBC-62: handle rate/quota limit errors during MCBP bootstrap (#93)",
          "timestamp": "2021-12-23T14:15:36Z",
          "tree_id": "b3797227be3d024ce431a8b6a204e61233364dc1",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/38a344e50e4f42bc11e23480bcbbab2b7bfddd31"
        },
        "date": 1640269777828,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 389.79,
            "range": "± 93.029",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3cf2dde35cc9ff93a58c05fc3c9da73e91bdd970",
          "message": "CXXCBC-63: generalize rate limit error handling for all query operations (#94)\n\n* CXXCBC-63: generalize rate limit error handling for all query operations\r\n\r\n* check for quota limit when creating search index\r\n\r\n* ensure that every management API is checking for rate limit errors",
          "timestamp": "2021-12-24T06:39:24Z",
          "tree_id": "8c72a9474b062603d0912623009efa80c5f71a75",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/3cf2dde35cc9ff93a58c05fc3c9da73e91bdd970"
        },
        "date": 1640328740682,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 350.768,
            "range": "± 162.325",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c7378d4635d0bf67ac2869d7457fbecfd48f837c",
          "message": "Updates for GitHub actions (#96)\n\n* update init-cluster script to configure eventing service\r\n\r\n* fix release labels for github actions\r\n\r\n* update server versions for github actions",
          "timestamp": "2022-01-03T10:35:43Z",
          "tree_id": "aec5763b113ad8d58028a6566e53acdc6a82afd9",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/c7378d4635d0bf67ac2869d7457fbecfd48f837c"
        },
        "date": 1641207102378,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 436.49,
            "range": "± 90.5793",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd7aec9392688f523adc1b5c13660f4148fd0905",
          "message": "tests: wait for all pindexes of search index ready before analyzing the document (#97)",
          "timestamp": "2022-01-04T07:35:53Z",
          "tree_id": "405c9cad9b11ff59d0e7221ecdc7f606fa780962",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/bd7aec9392688f523adc1b5c13660f4148fd0905"
        },
        "date": 1641282637524,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 436.481,
            "range": "± 80.07",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "17321686415edaab6c2b0eeee6437413dd86d1f6",
          "message": "CXXCBC-66: Add include_locations to search options (#99)",
          "timestamp": "2022-01-04T18:40:52Z",
          "tree_id": "94de4d3c0eba47edf0119dbe856229cf8de7985d",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/17321686415edaab6c2b0eeee6437413dd86d1f6"
        },
        "date": 1641322494036,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 385.775,
            "range": "± 790.771",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04889c62e18f30951764fc45bff723cb8333a1e8",
          "message": "CXXCBC-65: Add Custom member to Bucket Management ConflictResolutionType (#98)\n\nCouchbase 7.1 will provide a developer preview feature that allows\r\nbuckets to have custom conflict resolution.  Providing the new type will\r\nallow users to test out DP feature.",
          "timestamp": "2022-01-04T21:51:58Z",
          "tree_id": "ebe79e856498bdc786b2b6afec45b613b3201661",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/04889c62e18f30951764fc45bff723cb8333a1e8"
        },
        "date": 1641333956789,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 400.426,
            "range": "± 283.361",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d731ab809b39feb0a308dfaad467c9cdcfbfd3e",
          "message": "CXXCBC-7: eventing functions management operations (#95)",
          "timestamp": "2022-01-04T22:18:00Z",
          "tree_id": "eaae71191f1a420fed2d3104b0cc9c280e68eba2",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/0d731ab809b39feb0a308dfaad467c9cdcfbfd3e"
        },
        "date": 1641335557983,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 360.037,
            "range": "± 63.0039",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "101f544c63a3018216a469d8810305cde443ad43",
          "message": "tests: check if the cluster really have service provisioned (#101)",
          "timestamp": "2022-01-06T08:51:59Z",
          "tree_id": "02660b54d042c8fe9d42e777afe4fac8be0337c8",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/101f544c63a3018216a469d8810305cde443ad43"
        },
        "date": 1641460001250,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 373.352,
            "range": "± 116.685",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8028de8d5fe675327bbb90d8b8404a6f861d6b50",
          "message": "increase default memory quota for server (#102)",
          "timestamp": "2022-01-06T09:54:40Z",
          "tree_id": "ccb9c88d89c53694cade8a1181da4204d543528c",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/8028de8d5fe675327bbb90d8b8404a6f861d6b50"
        },
        "date": 1641463992146,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 659.707,
            "range": "± 719.153",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e95ec78cc8e3d2e2c74eda182c324d8b0ac48fb0",
          "message": "CXXCBC-70: Fixed race condition in tracing. (#103)",
          "timestamp": "2022-01-10T10:48:00Z",
          "tree_id": "a80c7afd04823bfc84d7642a650a0ccb2b479db5",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/e95ec78cc8e3d2e2c74eda182c324d8b0ac48fb0"
        },
        "date": 1641812568769,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 375.484,
            "range": "± 154.706",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "86120a686e5357df3ae359a030b2be1245053190",
          "message": "CXXCBC-68: implement preserve_expiry for query service (#100)",
          "timestamp": "2022-01-11T05:03:13Z",
          "tree_id": "81781a8d45f44a0471981e79be5b35fa1320ae9b",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/86120a686e5357df3ae359a030b2be1245053190"
        },
        "date": 1641878466531,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 532.388,
            "range": "± 226.055",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "597f818b43ce922f68669f7d829efe15005e72a8",
          "message": "SDKQE-2529: Don't run analytics tests on 5.5 (#104)\n\nRunning on 5.5 causes the analytics tests to fail when using tls. Analytics was dev preview in 5.5 so it's fine to skip it",
          "timestamp": "2022-01-11T19:41:21Z",
          "tree_id": "f0588c93558f751fc60424579525df6e11dd8427",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/597f818b43ce922f68669f7d829efe15005e72a8"
        },
        "date": 1641931289457,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 520.564,
            "range": "± 102.076",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "809940691ef3d6eee3d06701b4165086eb257f87",
          "message": "fix thread_sanitizer offences (#89)\n\n* fix thread_sanitizer offences\r\n\r\n* use the executor from stream for associated timers\r\n\r\n* Race in logging_meter\r\n\r\n* add lock around access to recorders_\r\n* use atomic version of hdr_record_value\r\n\r\n* CXXCBC-71. fix race with bootstrapped_ and pending_buffer_ (fixes #105)\r\n\r\nCo-authored-by: David Kelly <davidmichaelkelly@gmail.com>",
          "timestamp": "2022-01-12T17:33:55Z",
          "tree_id": "fa4a243ee7892b330bf51231e4ef59b0bcf1e1e5",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/809940691ef3d6eee3d06701b4165086eb257f87"
        },
        "date": 1642009897851,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 424.411,
            "range": "± 147.636",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e38467157a08a5f1cfd2af11f0d7a36031b5e287",
          "message": "re-run cmake-format (#107)",
          "timestamp": "2022-01-14T15:03:17Z",
          "tree_id": "f84481f3f7cd32a5e95dbb4e24aeb5e16f089f45",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/e38467157a08a5f1cfd2af11f0d7a36031b5e287"
        },
        "date": 1642173478151,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 367.849,
            "range": "± 49.9732",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c41ddd7ddf4a1982c5093ebd71accdd575389bd4",
          "message": "expose HTTP status code for freeform response (#108)",
          "timestamp": "2022-01-17T07:46:20Z",
          "tree_id": "ff3ab00f57caf9f95d8da4f55f1c38747746d70b",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/c41ddd7ddf4a1982c5093ebd71accdd575389bd4"
        },
        "date": 1642406429287,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 354.699,
            "range": "± 64.4729",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b8fea51f900af80abe09cbdda90aef944b05c10a",
          "message": "add test which creates scope using freeform query (#109)",
          "timestamp": "2022-01-18T19:53:44Z",
          "tree_id": "487f0f653d64969452c99c4b1e7d845ff4c13111",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/b8fea51f900af80abe09cbdda90aef944b05c10a"
        },
        "date": 1642536482769,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 358.504,
            "range": "± 49.0271",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ee93c46484816b65aefdc18d2bcd3b3f86f95ca",
          "message": "do not translate http status into error for freeform requests (#110)",
          "timestamp": "2022-01-19T06:51:22Z",
          "tree_id": "b3e58f4c93af40cc9778ef2f9492f9522302a028",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/8ee93c46484816b65aefdc18d2bcd3b3f86f95ca"
        },
        "date": 1642576202449,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 507.09,
            "range": "± 253.21",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2ee01ac434e8f6b3d4c0cc128fc2e81c14a1888c",
          "message": "use smart pointers for tracing (#112)",
          "timestamp": "2022-01-20T11:01:14Z",
          "tree_id": "9a586a3c5380e4261d6047cb81757c6537aab287",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/2ee01ac434e8f6b3d4c0cc128fc2e81c14a1888c"
        },
        "date": 1642677353863,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 357.885,
            "range": "± 90.9111",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aaf872d1fbd9f781ad244a648908582914707e54",
          "message": "CXXCBC-84: use error_code instead protocol status in subdoc results (#114)",
          "timestamp": "2022-01-20T13:59:19Z",
          "tree_id": "6d272d1cc89a2d9928a10dad09fbf1e5208ea84f",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/aaf872d1fbd9f781ad244a648908582914707e54"
        },
        "date": 1642688106150,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 374.046,
            "range": "± 45.7357",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6aa10a9c2bf5668703bed7a4813b9125ef008e33",
          "message": "CXXCBC-80: do not crash when opening non-existent bucket (#113)\n\n* CXXCBC-80: do not crash when opening non-existent bucket\r\n\r\n* don't schedule read operation if previous still running\r\n\r\n* prefer std::list.remove_if() to loop and calling reset() directly\r\n\r\n* post close event to be executed on http_session strand",
          "timestamp": "2022-01-20T20:00:37Z",
          "tree_id": "dacfc4c03c81f4a20a00b0911a5f7f8a0d9b8ee1",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/6aa10a9c2bf5668703bed7a4813b9125ef008e33"
        },
        "date": 1642709725629,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 393.246,
            "range": "± 203.947",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5829df37f1454cf033ff4fee248a8b4121277f4",
          "message": "CXXCBC-50: Streaming HTTP results (#111)\n\n* CXXCBC-50: bundle jsonsl (JSON streaming lexer)\r\n\r\n* CXXCBC-50: wrap jsonsl into C++ class\r\n\r\n* CXXCBC-50: Allow streaming HTTP responses",
          "timestamp": "2022-01-20T20:32:43Z",
          "tree_id": "240bbb1295edc0e15066ae4a42602c01e8db6573",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/b5829df37f1454cf033ff4fee248a8b4121277f4"
        },
        "date": 1642711710895,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 362.768,
            "range": "± 51.5938",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed0c8867b166a58c2dfc4d63d1b23f138d28610b",
          "message": "CXXCBC-64: allow to bind query request to selected node (#115)",
          "timestamp": "2022-01-21T19:40:07Z",
          "tree_id": "807c82c6bff98339f63ba374e3235974363c0260",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/ed0c8867b166a58c2dfc4d63d1b23f138d28610b"
        },
        "date": 1642794954539,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 388.855,
            "range": "± 83.6021",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e0966ea199c98e6237ecee26932af6646f7ea5bf",
          "message": "fix naming for responses of the HTTP queries (#117)",
          "timestamp": "2022-01-26T19:54:02Z",
          "tree_id": "964466bc416e2e8eab09db881110b31e021da16f",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/e0966ea199c98e6237ecee26932af6646f7ea5bf"
        },
        "date": 1643227846779,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 381.172,
            "range": "± 62.1262",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1780621d6b4ebe084dacaddb05b25b2b41c9b433",
          "message": "use std::chrono types for HTTP query timings (#118)",
          "timestamp": "2022-01-26T20:57:49Z",
          "tree_id": "49515eea9783ce1e9b322587f40ca8b6a785311c",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/1780621d6b4ebe084dacaddb05b25b2b41c9b433"
        },
        "date": 1643231834029,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 596.843,
            "range": "± 281.519",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8aaae7f1d08d82760ed5b0a04b9a9ff3ac7ab9b8",
          "message": "CXXCBC-92: include CAS into key_value error context (#119)",
          "timestamp": "2022-01-27T08:42:07Z",
          "tree_id": "6ab312ad0b53799def29423da306297b262466e8",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/8aaae7f1d08d82760ed5b0a04b9a9ff3ac7ab9b8"
        },
        "date": 1643274010916,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 450.342,
            "range": "± 76.9657",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c001b00194bb74a9064ba1102f09fce84acacd3b",
          "message": "CXXCBC-92: make client_context_id optional for HTTP operations (#120)",
          "timestamp": "2022-01-27T15:23:28Z",
          "tree_id": "78fe48b8298b85ec99038e390a88671eb70d5ae3",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/c001b00194bb74a9064ba1102f09fce84acacd3b"
        },
        "date": 1643298060437,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 535.264,
            "range": "± 698.226",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b80f89482c8c2ce4265600a757ed817340a4c448",
          "message": "CXXCBC-92: declare metrics as optional in query result (#122)",
          "timestamp": "2022-01-27T15:48:42Z",
          "tree_id": "ab3b16457fc5fdbd217211194ce5748a2ff8d824",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/b80f89482c8c2ce4265600a757ed817340a4c448"
        },
        "date": 1643299539195,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 439.492,
            "range": "± 97.7044",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e88bd380dcb629dae10f736fcb9e4772a8ebec8a",
          "message": "CXXCBC-41: use default timeouts from cluster_options (#121)",
          "timestamp": "2022-01-27T17:07:43Z",
          "tree_id": "b34ae0cdbbe5efdc12042e3dba2307731a2b3fc0",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/e88bd380dcb629dae10f736fcb9e4772a8ebec8a"
        },
        "date": 1643304255880,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 386.906,
            "range": "± 77.0931",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c112e452d083c901cbcc6e1a9fdbfb2be20615e2",
          "message": "CXXCBC-92: fix metrics for analytics and query resluts to conform RFC (#123)",
          "timestamp": "2022-01-27T19:37:20Z",
          "tree_id": "8575a4f5b2b714b5062af40c09b67e9af3b12c0c",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/c112e452d083c901cbcc6e1a9fdbfb2be20615e2"
        },
        "date": 1643313309735,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 475.078,
            "range": "± 76.1937",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32d135955f85b8eb90c59328d316a5cc0c19c2f1",
          "message": "CXXCBC-92: copy first error code and message into error context (#124)",
          "timestamp": "2022-01-27T21:00:40Z",
          "tree_id": "2447ce9b19f163b5e7e0ac22e1f780b0c59fc35d",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/32d135955f85b8eb90c59328d316a5cc0c19c2f1"
        },
        "date": 1643318283354,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 444.977,
            "range": "± 168.854",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a115c198e42d1e2b87f01f6554fd8d51fca487b7",
          "message": "SDKQE-2529: Don't run analytics tests on 5.5 (#125)\n\nCo-authored-by: Brett Lawson <brett19@gmail.com>",
          "timestamp": "2022-01-28T06:46:55Z",
          "tree_id": "d6c5023fc5ab3ebc950577d3c6c278ba85cb3c0b",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/a115c198e42d1e2b87f01f6554fd8d51fca487b7"
        },
        "date": 1643353356570,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 406.357,
            "range": "± 263.36",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb94d7c13a278f5768bb5075af11644c05a23b63",
          "message": "Fixed issue with immutability of handler for close callback. (#126)\n\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2022-01-28T07:22:34Z",
          "tree_id": "a4ff74c0c7020f70a558900cf162e0f32237ff8c",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/bb94d7c13a278f5768bb5075af11644c05a23b63"
        },
        "date": 1643355501116,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 491.627,
            "range": "± 211.993",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b949b4bd9f96cba7e2a4bbd2d63ba0a4beab0642",
          "message": "CXXCBC-58: do not use nodes ejected during rebalance (#116)\n\nCo-authored-by: Brett Lawson <brett19@gmail.com>",
          "timestamp": "2022-01-28T08:07:02Z",
          "tree_id": "1c7a440c731a53b905310c91e82214ade3af4fb1",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/b949b4bd9f96cba7e2a4bbd2d63ba0a4beab0642"
        },
        "date": 1643358366058,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 553.245,
            "range": "± 321.437",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04c161acb0b59203fa5709fe37c8b5e694562bbb",
          "message": "CXXCBC-92: add test to clarify retrying on kv_locked (#127)",
          "timestamp": "2022-01-28T09:23:10Z",
          "tree_id": "ea9a14d9cc895521d6429237a3ee123160082d60",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/04c161acb0b59203fa5709fe37c8b5e694562bbb"
        },
        "date": 1643362941828,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 527.753,
            "range": "± 90.5133",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df11990a9785b6697ee7a3d138cf2c0672038247",
          "message": "extract utility function for translation of query error codes (#128)\n\n* extract utility function for translation of query error codes\r\n\r\n* extract utility function for translation of analytics error codes\r\n\r\n* extract utility function for translation of search error codes",
          "timestamp": "2022-01-28T19:28:01Z",
          "tree_id": "2345dac0d23d9389560a5f41eeed00b2a404c436",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/df11990a9785b6697ee7a3d138cf2c0672038247"
        },
        "date": 1643399067845,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 396.927,
            "range": "± 276.575",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d088012deac9ead86ef1cefaa0f462bffa8f3cab",
          "message": "CXXCBC-106, CXXCBC-105: propagate mutate_in field status as response error code (#129)",
          "timestamp": "2022-02-02T06:13:36Z",
          "tree_id": "db1987fc136a75e8d750c290ee1a4c5b394cb286",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/d088012deac9ead86ef1cefaa0f462bffa8f3cab"
        },
        "date": 1643783363302,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 398.182,
            "range": "± 224.598",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b74b0a82abf2d45b8c323337d2bcc67b129323d1",
          "message": "SDKQE-2573: Wait for scope to be created before creating collection (#131)\n\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2022-02-02T16:16:07Z",
          "tree_id": "7688b8a3b9e403462a1c6d5526f37fd495fb47e4",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/b74b0a82abf2d45b8c323337d2bcc67b129323d1"
        },
        "date": 1643819546442,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 436.129,
            "range": "± 758.846",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b985e973396fd857c50a5a5de6e73506e05c73d5",
          "message": "SDKQE-2574: Retry get user after create user until it exists (#132)\n\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2022-02-02T16:42:31Z",
          "tree_id": "4e9d9b8a29c32a32420b4c7aa1add2fe49ce56e7",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/b985e973396fd857c50a5a5de6e73506e05c73d5"
        },
        "date": 1643821151955,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 355.379,
            "range": "± 35.4261",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ce680cc940c92aef46f40b9ce199511a22ad820",
          "message": "CXXCBC-99: allow to wrappers to extend user_agent string (#134)",
          "timestamp": "2022-02-03T13:08:55-08:00",
          "tree_id": "8f038e201151060892bfd6c75394dba395c0a47f",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/3ce680cc940c92aef46f40b9ce199511a22ad820"
        },
        "date": 1643923560278,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 399.612,
            "range": "± 173.87",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f15184688be631bf4d20c67163416329a082720b",
          "message": "CXXCBC-123: substitute $HOST in the configuration (#135)",
          "timestamp": "2022-02-07T11:05:29Z",
          "tree_id": "37808a71d2862d7afaf2cae972c565ba6d46c0d8",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/f15184688be631bf4d20c67163416329a082720b"
        },
        "date": 1644232815584,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 382.607,
            "range": "± 336.771",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b7e1e7a0e7f254949f69dc2c6c03246eb34a97f",
          "message": "SDKQE-2574: Retry management operations on expected errors (#136)\n\nBecause the management APIs are async, some not found errors are expected occasionally. Retry these errors when they occur.",
          "timestamp": "2022-02-08T12:00:54Z",
          "tree_id": "e9a4fd2581c2c9768963e2d72cbaa8095ae2cebe",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/5b7e1e7a0e7f254949f69dc2c6c03246eb34a97f"
        },
        "date": 1644322587978,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 424.038,
            "range": "± 715.573",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d77d0e7a6c0a9a6cf1696e30ef592576865fdd2e",
          "message": "CXXCBC-122: use custom request timeout if user has specified it (#138)",
          "timestamp": "2022-02-08T17:29:52Z",
          "tree_id": "ad342067674f64363f1a3023a4edbf287aa1e6a9",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/d77d0e7a6c0a9a6cf1696e30ef592576865fdd2e"
        },
        "date": 1644342256207,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 350.039,
            "range": "± 53.1694",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "427e4e24beae68598a684b82f969697ba28332c4",
          "message": "cleanup configuration parser (#137)",
          "timestamp": "2022-02-08T18:15:34Z",
          "tree_id": "40f2fcd39d52f5275a3dee1a87a26ad4d0846426",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/427e4e24beae68598a684b82f969697ba28332c4"
        },
        "date": 1644345292431,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 527.48,
            "range": "± 199.485",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48f2e4cc7849f3be01019449cd065e13a5556b12",
          "message": "CXXCBC-107: fail all operations executed on closed cluster (#139)",
          "timestamp": "2022-02-08T18:50:02Z",
          "tree_id": "628c28a0a24faaae54209bd8617675ca7f470c3c",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/48f2e4cc7849f3be01019449cd065e13a5556b12"
        },
        "date": 1644346966757,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 277.325,
            "range": "± 16.4841",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "feb9e1f797d6c0a98d4aa6b932e6ed4af272f5e2",
          "message": "CXXCBC-90: make http parsing thread safe (#140)\n\n* CXXCBC-90: make http parsing thread safe\r\n\r\n* extra info about deadlocks found by tsan\r\n\r\n* CXXCBC-90: fix potential deadlock by reducing scope of the locks",
          "timestamp": "2022-02-08T20:13:12Z",
          "tree_id": "c5746047712f5d3d39a9c151f21a5b29e6275319",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/feb9e1f797d6c0a98d4aa6b932e6ed4af272f5e2"
        },
        "date": 1644352159206,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 360.294,
            "range": "± 63.8206",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "850af5d20ef3723d414a7e5219e7d6e6d862cc33",
          "message": "CXXCBC-126: do not assume \"status\" always in analytics response (#141)",
          "timestamp": "2022-02-08T20:16:01Z",
          "tree_id": "2f208935c8e17c866777e1e97d3583f8b37d446e",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/850af5d20ef3723d414a7e5219e7d6e6d862cc33"
        },
        "date": 1644352380508,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 452.919,
            "range": "± 73.1936",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32710cb203177b7567da422af8051cf0a56cac88",
          "message": "CXXCBC-123: Infer this_node when server does not provide it. (#142)",
          "timestamp": "2022-02-08T15:31:24-08:00",
          "tree_id": "bc4ab9625f57330f9cc80aa9c27190217e48d013",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/32710cb203177b7567da422af8051cf0a56cac88"
        },
        "date": 1644364184577,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 505.743,
            "range": "± 98.7403",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd91c5bfe49953184db050db03fa181df257a281",
          "message": "CXXCBC-128: fix build on Windows (#143)\n\n* fix windows build\r\n\r\n* rollback to std::function\r\n\r\n* provide simpler wrapper for movable std::function\r\n\r\n* do not complain about getenv() in test code\r\n\r\n* remove unused variable\r\n\r\n* fix build script\r\n\r\n* avoid double to int64_t conversion\r\n\r\n* disable pragma warning for asio\r\n\r\n* suppress progress for 'choco install'\r\n\r\n* help std::optional infer type\r\n\r\n* fix type conversion for http_session_manager\r\n\r\n* disable MSVC warning 4242, that is triggered in ASIO\r\n\r\n* back_inserter -> back_insert_iterator\r\n\r\n* MSVC complains on correct usage of std::tolower\r\n\r\n* replace unsafe sscanf\r\n\r\n* missing include for iterator and replace unsafe sprintf\r\n\r\n* port find_files_with_prefix for windows\r\n\r\n* restore old shell script\r\n\r\n* Fix issues with bigobj and bcrypt.lib.\r\n\r\n* Don't build as a shared library.\r\n\r\n* link std::filesystem (necessary on CentOS 8)\r\n\r\nCo-authored-by: Brett Lawson <brett19@gmail.com>",
          "timestamp": "2022-02-10T11:00:25Z",
          "tree_id": "4966d9dfec39f69dbb4228d2aa420e4c01353daa",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/dd91c5bfe49953184db050db03fa181df257a281"
        },
        "date": 1644492054962,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 521.787,
            "range": "± 316.801",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08e0a41a00bec91d15dcb8c5da4ba9def52651f9",
          "message": "use shared pointers for metrics collector (#147)",
          "timestamp": "2022-02-11T15:47:45Z",
          "tree_id": "b1654cb8f0fa67f3941bcea2b6f9543317272ede",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/08e0a41a00bec91d15dcb8c5da4ba9def52651f9"
        },
        "date": 1644595537077,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 447.551,
            "range": "± 100.703",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6533348c57e903964898da2ab47ea1487aacec4e",
          "message": "Fixed bootstrapping to support non-copyable handlers. (#146)\n\n* Fixed additional methods to support non-copyable handlers.\r\n\r\n* Workaround copyability problem for movable_function.\r\n\r\n* use easier-to-remember env var for test logger\r\n\r\n* Disable construction of cluster object on the stack\r\n\r\n    Force to use std::shared_ptr to prolong life time of the cluster until\r\n    all operations are properly completed\r\n\r\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2022-02-11T18:45:08Z",
          "tree_id": "fd6d3a4b9e446ea4e94036ef5fd7745aa969700b",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/6533348c57e903964898da2ab47ea1487aacec4e"
        },
        "date": 1644605948561,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 308.27,
            "range": "± 26.018",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5aefcd5ea44cc1539c21af0d5bbc52c76584ea82",
          "message": "Fixed issue with http sessions being moved before send completion. (#148)",
          "timestamp": "2022-02-11T12:10:46-08:00",
          "tree_id": "fa22b7bf04cda8dfe0831f7b9a2cb0380cf237b1",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/5aefcd5ea44cc1539c21af0d5bbc52c76584ea82"
        },
        "date": 1644611210992,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 381.775,
            "range": "± 79.6181",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dddd81e1abbd095e66743c9c7a7c878891c6dcde",
          "message": "Fix windows compiler warning in dirutils. (#149)",
          "timestamp": "2022-02-11T13:59:59-08:00",
          "tree_id": "a29bb30eca9769658bdcc8adc3dadb6853911b5f",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/dddd81e1abbd095e66743c9c7a7c878891c6dcde"
        },
        "date": 1644618085875,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 709.845,
            "range": "± 936.378",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2e70c38f7539d2ecc73d2f0aad6f77329a13ef27",
          "message": "CXXCBC-134: Close stream before attempting to connect to next endpoint (#151)",
          "timestamp": "2022-02-14T15:08:24Z",
          "tree_id": "680a301fcca60366ebb52c609155f551e34f6b1c",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/2e70c38f7539d2ecc73d2f0aad6f77329a13ef27"
        },
        "date": 1644852529190,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 801.902,
            "range": "± 1.02899",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "517fe129b5fa15b4a82ae7d4f1dbb63e438f230b",
          "message": "Fix issue with Internal Compiler Error on VS 2019. (#152)",
          "timestamp": "2022-02-14T11:46:48-08:00",
          "tree_id": "03e405325aacbc729e4c89aa38fc32efe93c0c33",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/517fe129b5fa15b4a82ae7d4f1dbb63e438f230b"
        },
        "date": 1644868892455,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 309.713,
            "range": "± 30.5083",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eee07b290c93b1cb29d03166bb2cf7d2893fc70a",
          "message": "CXXCBC-135: Don't read past end of buf in mcbp_parser (#153)",
          "timestamp": "2022-02-15T13:42:30Z",
          "tree_id": "ebbf77f66befb7c1416f8904169fd9a1e3cf3a83",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/eee07b290c93b1cb29d03166bb2cf7d2893fc70a"
        },
        "date": 1644933727536,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 466.598,
            "range": "± 65.3473",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69dacfd050818a20e829a6714c27577868a13c8e",
          "message": "Fix windows integration test crash (#154)\n\nCo-authored-by: Sergey Avseyev <sergey.avseyev@gmail.com>",
          "timestamp": "2022-02-15T14:17:44Z",
          "tree_id": "7556a48fb05673d688700b3cbb2130df859199b2",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/69dacfd050818a20e829a6714c27577868a13c8e"
        },
        "date": 1644935500784,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 322.137,
            "range": "± 185.497",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0992b6f693366bb0481d3ebaed4f57bc8ef11882",
          "message": "Fix config updates during rebalance (#150)\n\n* KV loader tool\r\n\r\n* CXXCBC-130, CXXCBC-58. Fix configuration updates during rebalance\r\n\r\n* cancel MCBP timers before invoking the callback\r\n\r\n* protect configuration\r\n\r\n* swap handler before invocation\r\n\r\n* use locks to access config in http_session_manager",
          "timestamp": "2022-02-16T07:20:38Z",
          "tree_id": "b9cda4a455bb481ac0ce2e4e9fa6c24d5c36f7f2",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/0992b6f693366bb0481d3ebaed4f57bc8ef11882"
        },
        "date": 1644996975580,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 406.329,
            "range": "± 397.762",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04d9e691cdd6c3235de045f10ca159f20977f9b8",
          "message": "update asio to 1.21.0 (#155)",
          "timestamp": "2022-02-16T12:55:30Z",
          "tree_id": "091e4da9526a881d684426937ca7e9ee87d2d97b",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/04d9e691cdd6c3235de045f10ca159f20977f9b8"
        },
        "date": 1645017224572,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 424.051,
            "range": "± 94.9793",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8e1a9a32e498ed025110f52db7b28e89ee1db60",
          "message": "CXXCBC-58, CXXCBC-72: notify HTTP manager about config updates (#156)",
          "timestamp": "2022-02-16T17:31:23Z",
          "tree_id": "f4c5b5f0d557f3b8cc03b95ed6f23c2c407dadc8",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/f8e1a9a32e498ed025110f52db7b28e89ee1db60"
        },
        "date": 1645033581553,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 346.794,
            "range": "± 42.373",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f971d8296842153bdfdb07634088c2e2d97c5ba",
          "message": "CXXCBC-58, CXXCBC-72: release bootstrap connection, fix config update condition (#157)",
          "timestamp": "2022-02-16T20:11:34Z",
          "tree_id": "6eb7803b2c90873ad3e3d060d84d319f60fb8471",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/7f971d8296842153bdfdb07634088c2e2d97c5ba"
        },
        "date": 1645043206496,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 345.902,
            "range": "± 40.9008",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "06e92c4980a788aa220d6a48057606322d774804",
          "message": "create socket in stream as shared_ptr (#158)",
          "timestamp": "2022-02-16T21:28:39Z",
          "tree_id": "67d6d373183648b5b768c90abeae2bdd4556264d",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/06e92c4980a788aa220d6a48057606322d774804"
        },
        "date": 1645047922848,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 377.61,
            "range": "± 62.7308",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b10a9262f31f2e6c6927c9650361b1107a8b4b9",
          "message": "CXXCBC-137: fix tracing segfault in MCBP command (#160)",
          "timestamp": "2022-02-17T15:28:07Z",
          "tree_id": "b8925dcb1028a32708bcf114e75d9b23879f264a",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/6b10a9262f31f2e6c6927c9650361b1107a8b4b9"
        },
        "date": 1645112651074,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 377.356,
            "range": "± 57.8578",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "757d07cb7263bd1becb20a6b6841d7f5d926fe0b",
          "message": "CXXCBC-138: protect HTTP round-robin index with mutex (#161)",
          "timestamp": "2022-02-17T18:54:35Z",
          "tree_id": "5581b7ca79c7d9ab4863c2ea7ca574cc716f0898",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/757d07cb7263bd1becb20a6b6841d7f5d926fe0b"
        },
        "date": 1645125001270,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 350.264,
            "range": "± 44.9715",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jake.rawsthorne@couchbase.com",
            "name": "Jake Rawsthorne",
            "username": "jrawsthorne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "944e682534c3e720cb2e78f1338a839cd34e1f5c",
          "message": "Retry groups get all until group created (#163)",
          "timestamp": "2022-02-18T16:17:36Z",
          "tree_id": "19997de40d4beb72b5a98173f3bf520b10f2dc30",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/944e682534c3e720cb2e78f1338a839cd34e1f5c"
        },
        "date": 1645201960792,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 351.625,
            "range": "± 59.5186",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brett19@gmail.com",
            "name": "Brett Lawson",
            "username": "brett19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f07e53352d9ec76bb4c8ed612f19f03e2cac784",
          "message": "Fix issue where close() during open_bucket() can segfault. (#164)",
          "timestamp": "2022-02-18T14:29:04-08:00",
          "tree_id": "98876d486a80e5054ed839e483558d76594a6154",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/7f07e53352d9ec76bb4c8ed612f19f03e2cac784"
        },
        "date": 1645224308120,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 439.218,
            "range": "± 773.442",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergey.avseyev@gmail.com",
            "name": "Sergey Avseyev",
            "username": "avsej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b450d1add0987ce33406e858c0034e9aa02781e",
          "message": "CXXCBC-124: remove status code validity assertion from protocol parser (#165)\n\nUnknown status codes will be handled using error map",
          "timestamp": "2022-02-22T13:14:10Z",
          "tree_id": "0fa29f07aa447f6667ad33ca271fca7041d670ce",
          "url": "https://github.com/couchbaselabs/couchbase-cxx-client/commit/5b450d1add0987ce33406e858c0034e9aa02781e"
        },
        "date": 1645536500910,
        "tool": "catch2",
        "benches": [
          {
            "name": "get",
            "value": 313.035,
            "range": "± 24.7663",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      }
    ]
  }
}