/* -*- Mode: C++; tab-width: 4; c-basic-offset: 4; indent-tabs-mode: nil -*- */
/*
 *   Copyright 2020-2021 Couchbase, Inc.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

#pragma once

#include <couchbase/error_context/key_value.hxx>
#include <couchbase/io/mcbp_context.hxx>
#include <couchbase/io/retry_context.hxx>
#include <couchbase/protocol/client_request.hxx>
#include <couchbase/protocol/cmd_get_and_lock.hxx>
#include <couchbase/timeout_defaults.hxx>

namespace couchbase::operations
{

struct get_and_lock_response {
    error_context::key_value ctx;
    std::string value{};
    protocol::cas cas{};
    std::uint32_t flags{};
};

struct get_and_lock_request {
    using response_type = get_and_lock_response;
    using encoded_request_type = protocol::client_request<protocol::get_and_lock_request_body>;
    using encoded_response_type = protocol::client_response<protocol::get_and_lock_response_body>;

    document_id id;
    uint16_t partition{};
    uint32_t opaque{};
    uint32_t lock_time{};
    std::optional<std::chrono::milliseconds> timeout{};
    io::retry_context<io::retry_strategy::best_effort> retries{ false };

    [[nodiscard]] std::error_code encode_to(encoded_request_type& encoded, mcbp_context&& context) const;

    [[nodiscard]] get_and_lock_response make_response(error_context::key_value&& ctx, const encoded_response_type& encoded) const;
};

} // namespace couchbase::operations
