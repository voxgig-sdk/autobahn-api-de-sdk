<?php
declare(strict_types=1);

// AutobahnApiDe SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class AutobahnApiDeFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new AutobahnApiDeBaseFeature();
            case "test":
                return new AutobahnApiDeTestFeature();
            default:
                return new AutobahnApiDeBaseFeature();
        }
    }
}
