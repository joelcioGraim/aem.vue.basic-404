/*
 * ***********************************************************************
 * SPA Vue Project CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 SPA Vue Project.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of SPA Vue Project and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to SPA Vue Project
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from SPA Vue Project.
 * ***********************************************************************
 */

package com.vue.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.vue.core.models.Input;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    Input.class,
    ComponentExporter.class
}, resourceType = "vue/components/input")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class InputImpl
    implements Input
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String type;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String name;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String placeholder;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean required;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("type")
    public String getType() {
        return type;
    }

    @Override
    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @Override
    @JsonProperty("placeholder")
    public String getPlaceholder() {
        return placeholder;
    }

    @Override
    public Boolean getRequired() {
        return required;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
