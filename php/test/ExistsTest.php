<?php
declare(strict_types=1);

// AutobahnApiDe SDK exists test

require_once __DIR__ . '/../autobahnapide_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = AutobahnApiDeSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
