<template>
	<div class="ui-kit">
		<div class="block block-column">
			Alerts
			<main-alert description="success description" title="success" type="success" />
			<main-alert description="info description" title="info" type="info" />
			<main-alert description="warning description" title="warning" type="warning" />
			<main-alert description="error description" title="error" type="error" />
			<main-alert effect="dark" description="success description" title="dark" type="success" />
			<main-alert effect="dark" description="info description" title="dark" type="info" />
			<main-alert effect="dark" description="warning description" title="dark" type="warning" />
			<main-alert effect="dark" description="error description" title="dark" type="error" />
			<main-alert closeText="close text" description="error description" title="close text" type="error" />
			<main-alert :isShowIcon="false" description="error description" title="not show icon" type="error" />
			<main-alert :isCenter="true" description="error description" title="center" type="error" />
			<main-alert :isClosable="false" description="error description" title="unclosable" type="error" />
		</div>
		<div class="block block-column">
			Time select
			<time-select
				v-model="timeSelectModelValue"
				placeholder="Main time select"
			/>
		</div>
		<div class="block block-column">
			Tabs
			<main-tabs
				v-model="tabController"
				:tabs="tabs"
			>
				<template #tab0>
					User tab 1
				</template>
				<template #tab1>
					User tab 2
				</template>
				<template #tab2>
					User tab 3
				</template>
				<template #tab3>
					User tab 4
				</template>
			</main-tabs>
			Border card type
			<main-tabs
				v-model="tabController"
				:tabs="tabs"
				type="border-card"
			>
				<template #tab0>
					User tab 1
				</template>
				<template #tab1>
					User tab 2
				</template>
				<template #tab2>
					User tab 3
				</template>
				<template #tab3>
					User tab 4
				</template>
			</main-tabs>
			Card type
			<main-tabs
				v-model="tabController"
				:tabs="tabs"
				type="card"
			>
				<template #tab0>
					User tab 1
				</template>
				<template #tab1>
					User tab 2
				</template>
				<template #tab2>
					User tab 3
				</template>
				<template #tab3>
					User tab 4
				</template>
			</main-tabs>
			tabs position
			<main-tabs
				v-model="tabController"
				:tabs="tabs"
				type="border-card"
			>
				<template #tab0>
					User tab 1
				</template>
				<template #tab1>
					User tab 2
				</template>
				<template #tab2>
					User tab 3
				</template>
				<template #tab3>
					User tab 4
				</template>
			</main-tabs>
			<main-tabs
				v-model="tabController"
				:tabs="tabs"
				type="border-card"
				tab-position="left"
			>
				<template #tab0>
					User tab 1
				</template>
				<template #tab1>
					User tab 2
				</template>
				<template #tab2>
					User tab 3
				</template>
				<template #tab3>
					User tab 4
				</template>
			</main-tabs>
			<main-tabs
				v-model="tabController"
				:tabs="tabs"
				type="border-card"
				tab-position="bottom"
			>
				<template #tab0>
					User tab 1
				</template>
				<template #tab1>
					User tab 2
				</template>
				<template #tab2>
					User tab 3
				</template>
				<template #tab3>
					User tab 4
				</template>
			</main-tabs>
			<main-tabs
				v-model="tabController"
				:tabs="tabs"
				type="border-card"
				tab-position="right"
			>
				<template #tab0>
					User tab 1
				</template>
				<template #tab1>
					User tab 2
				</template>
				<template #tab2>
					User tab 3
				</template>
				<template #tab3>
					User tab 4
				</template>
			</main-tabs>
		</div>
		<div class="block block-column">
			Breadcrumbs
			<main-breadcrumbs :route-history="routeHistory" separator=">" />
			<main-breadcrumbs :route-history="routeHistory" separatorIcon="Apple" />
		</div>
		<div class="block block-column">
			Tags
			<main-tag type="primary" :is-round="false">tag primary</main-tag>
			<main-tag type="success" :is-round="false">tag success</main-tag>
			<main-tag type="info" :is-round="false">tag info</main-tag>
			<main-tag type="warning" :is-round="false">tag warning</main-tag>
			<main-tag type="danger" :is-round="false">tag danger</main-tag>
			Closable
			<main-tag is-closable :is-round="false">tag closable</main-tag>
			Sizes
			<main-tag size="large" :is-round="false">tag large</main-tag>
			<main-tag :is-round="false">tag default</main-tag>
			<main-tag size="small" :is-round="false">tag small</main-tag>
			Round
			<main-tag>tag round</main-tag>
			Hit
			<main-tag is-hit :is-round="false">tag hit</main-tag>
			Effect "plain" | "light | "dark"
			<main-tag effect="plain" :is-round="false">tag plain</main-tag>
			<main-tag effect="light" :is-round="false">tag light</main-tag>
			<main-tag effect="dark" :is-round="false">tag dark</main-tag>
			U can disable transition
		</div>
		<div class="block block-column">
			Buttons
			<main-button type="primary">button primary</main-button>
			<main-button type="success">button success</main-button>
			<main-button type="info">button info</main-button>
			<main-button type="warning">button warning</main-button>
			<main-button type="danger">button danger</main-button>
			<main-button type="primary" dark>dark primary</main-button>
			<main-button type="success" dark>dark success</main-button>
			<main-button type="info" dark>dark info</main-button>
			<main-button type="warning" dark>dark warning</main-button>
			<main-button type="danger" dark>dark danger</main-button>
			With bg
			<main-button type="primary" is-text is-bg>text with always background</main-button>
			<main-button type="success" is-text is-bg>text with always background</main-button>
			<main-button type="info" is-text is-bg>text with always background</main-button>
			<main-button type="warning" is-text is-bg>text with always background</main-button>
			<main-button type="danger" is-text is-bg>text with always background</main-button>
			Size
			<main-button type="primary" size="large">primary large</main-button>
			<main-button type="primary">primary default</main-button>
			<main-button type="primary" size="small">primary small</main-button>
			Icon
			<main-button type="primary" icon="Apple">primary with icon</main-button>
			<main-button type="primary" icon="Apple" is-icon-right>primary with icon right</main-button>
			Loading
			<main-button type="primary" loading>primary loading</main-button>
			<main-button type="primary" loading loading-icon="Apple">primary loading icon</main-button>
			Disabled
			<main-button type="primary" is-disable>primary disabled</main-button>
			Types
			<main-button type="primary" is-link>primary link</main-button>
			<main-button type="primary" is-round>primary round</main-button>
			<main-button type="primary" is-text>primary text</main-button>
			<main-button type="primary" is-plain>primary plain</main-button>
			<main-button type="primary" is-circle icon="Apple"></main-button>
		</div>
		<div class="block block-column">
			Solo using with v-model
			<main-checkbox v-model="checkboxValue" label="Checkbox" />
			<main-checkbox is-border v-model="checkboxValue" size="large" label="Checkbox large" />
			<main-checkbox is-border v-model="checkboxValue" label="Checkbox default" />
			<main-checkbox is-border v-model="checkboxValue" size="small" label="Checkbox small" />
			States
			<main-checkbox v-model="checkboxValue" is-disable label="Checkbox disabled" />
			<main-checkbox v-model="checkboxValue" is-border label="Checkbox with border" />
			Group
			<main-checkbox-group v-model="checkboxValueByArray" :checkboxes="checkboxArray" />
			Size
			<main-checkbox-group is-border size="large" v-model="checkboxValueByArray" :checkboxes="checkboxArray" />
			<main-checkbox-group is-border v-model="checkboxValueByArray" :checkboxes="checkboxArray" />
			<main-checkbox-group is-border size="small" v-model="checkboxValueByArray" :checkboxes="checkboxArray" />
			States
			<main-checkbox-group is-disable v-model="checkboxValueByArray" :checkboxes="checkboxArray" />
			<main-checkbox-group is-border v-model="checkboxValueByArray" :checkboxes="checkboxArray" />
		</div>
		<div class="block block-column">
			Collapse
			<main-collapse :model-value="collapseValue" :collapse-items="collapseArray">
				<template #3>
					collapse text 3 collapse text 3 collapse text 3 collapse text 3 <br />
					with <br />
					SLOT
				</template>
			</main-collapse>
			Accordion
			<main-collapse is-accordion :model-value="collapseValue" :collapse-items="collapseArray">
				<template #3>
					collapse text 3 collapse text 3 collapse text 3 collapse text 3 <br />
					with <br />
					SLOT
				</template>
			</main-collapse>
			Flex
			<main-collapse is-flex :model-value="collapseValue" :collapse-items="collapseArray">
				<template #3>
					collapse text 3 collapse text 3 collapse text 3 collapse text 3 <br />
					with <br />
					SLOT
				</template>
			</main-collapse>
		</div>
		<div class="block block-column">
			<main-date-picker
				v-model="dateValue"
				placeholder="Select date"
			></main-date-picker>
			Sizes
			<main-date-picker
				v-model="dateValue"
				size="large"
				placeholder="Select date (large)"
			></main-date-picker>
			<main-date-picker
				v-model="dateValue"
				placeholder="Select date (default)"
			></main-date-picker>
			<main-date-picker
				v-model="dateValue"
				size="small"
				placeholder="Select date (small)"
			></main-date-picker>
			States
			<main-date-picker
				v-model="dateValue"
				is-disable
				placeholder="Select date (disable)"
			></main-date-picker>
			<main-date-picker
				v-model="dateValue"
				is-clearable
				placeholder="Select date (clearable)"
			></main-date-picker>
			Value format
			<main-date-picker
				v-model="dateValue"
				format="YYYY|MM|DD"
				placeholder="Select date (input format)"
			></main-date-picker>
			<main-date-picker
				v-model="dateValueFormat"
				value-format="YYYY|MM|DD"
				placeholder="Select date (value format)"
			></main-date-picker>
			{{ dateValueFormat }} <br />
			Icons
			<main-date-picker
				v-model="dateValue"
				placeholder="Select date (prefix icon)"
				prefix-icon="Apple"
			></main-date-picker>
			<main-date-picker
				v-model="dateValue"
				placeholder="Select date (clear icon)"
				clear-icon="Apple"
				is-clearable
			></main-date-picker>
			Types
			<main-date-picker
				v-model="year"
				placeholder="Select year"
				:type="DateTypeEnum.Year"
			></main-date-picker>
			<main-date-picker
				v-model="month"
				placeholder="Select month"
				:type="DateTypeEnum.Month"
			></main-date-picker>
			<main-date-picker
				v-model="dates"
				placeholder="Select dates"
				:type="DateTypeEnum.Dates"
			></main-date-picker>
			<main-date-picker
				v-model="datetime"
				placeholder="Select datetime"
				:type="DateTypeEnum.DateTime"
			></main-date-picker>
			<main-date-picker
				v-model="week"
				placeholder="Select week"
				:type="DateTypeEnum.Week"
			></main-date-picker>
			Range
			<main-date-picker
				v-model="datetimerange"
				rangeSeparator="separator"
				startPlaceholder="Select datetime"
				endPlaceholder="range"
				:type="DateTypeEnum.DateTimeRange"
			></main-date-picker>
			<main-date-picker
				v-model="daterange"
				rangeSeparator="}{"
				startPlaceholder="Select date"
				endPlaceholder="range"
				:type="DateTypeEnum.DateRange"
			></main-date-picker>
			<main-date-picker
				v-model="monthrange"
				rangeSeparator="||"
				startPlaceholder="Select month"
				endPlaceholder="range"
				:type="DateTypeEnum.MonthRange"
			></main-date-picker>
			Default value
			<main-date-picker
				v-model="dateValue"
				placeholder="Select date"
				:default-value="new Date('2003.07.07')"
			></main-date-picker>
			Can use short cuts
		</div>
		<div class="block block-column">
			Empty
			<main-empty
				description="Custom description"
			/>
			<main-empty
				description="Custom image size"
				:image-size="64"
			/>
			U can change image (prop.image)
		</div>
		<div class="block block-column">
			Form
			<main-form
				:form-value="form"
			>
				<main-form-item
					label="Enter ur name"
					prop="name"
				>
					<main-input v-model="form.name" placeholder="Name" />
				</main-form-item>
				<main-form-item
					label="Enter ur password"
					prop="password"
				>
					<main-input v-model="form.password" placeholder="Password" type="password" />
				</main-form-item>
			</main-form>
			Sizes
			<main-form
				:form-value="form"
				size="large"
			>
				<main-form-item
					label="Enter ur name"
					prop="name"
				>
					<main-input v-model="form.name" placeholder="Name" />
				</main-form-item>
				<main-form-item
					label="Enter ur password"
					prop="password"
				>
					<main-input v-model="form.password" placeholder="Password" type="password" />
				</main-form-item>
			</main-form>
			<main-form
				:form-value="form"
			>
				<main-form-item
					label="Enter ur name"
					prop="name"
				>
					<main-input v-model="form.name" placeholder="Name" />
				</main-form-item>
				<main-form-item
					label="Enter ur password"
					prop="password"
				>
					<main-input v-model="form.password" placeholder="Password" type="password" />
				</main-form-item>
			</main-form>
			<main-form
				:form-value="form"
				size="small"
			>
				<main-form-item
					label="Enter ur name"
					prop="name"
				>
					<main-input v-model="form.name" placeholder="Name" />
				</main-form-item>
				<main-form-item
					label="Enter ur password"
					prop="password"
				>
					<main-input v-model="form.password" placeholder="Password" type="password" />
				</main-form-item>
			</main-form>
			Label positions
			<main-form
				:form-value="form"
				label-position="left"
			>
				<main-form-item
					label="Enter ur name"
					prop="name"
				>
					<main-input v-model="form.name" placeholder="Name" />
				</main-form-item>
				<main-form-item
					label="Enter ur password"
					prop="password"
				>
					<main-input v-model="form.password" placeholder="Password" type="password" />
				</main-form-item>
			</main-form>
			<main-form
				:form-value="form"
				label-position="right"
			>
				<main-form-item
					label="Enter ur name"
					prop="name"
				>
					<main-input v-model="form.name" placeholder="Name" />
				</main-form-item>
				<main-form-item
					label="Enter ur password"
					prop="password"
				>
					<main-input v-model="form.password" placeholder="Password" type="password" />
				</main-form-item>
			</main-form>
			<main-form
				:form-value="form"
				label-position="top"
			>
				<main-form-item
					label="Enter ur name"
					prop="name"
				>
					<main-input v-model="form.name" placeholder="Name" />
				</main-form-item>
				<main-form-item
					label="Enter ur password"
					prop="password"
				>
					<main-input v-model="form.password" placeholder="Password" type="password" />
				</main-form-item>
			</main-form>
			Validate
			<main-form
				:form-value="form"
			>
				<main-form-item
					label="Enter ur name"
					prop="name"
					:rules="[
            {
              required: true,
              message: 'Please input ur name',
              trigger: 'blur',
            },
          ]"
				>
					<main-input v-model="form.name" placeholder="Name" />
				</main-form-item>
				<main-form-item
					label="Enter ur password"
					prop="password"
					:rules="[
            {
              required: true,
              message: 'Please input ur passsword',
              trigger: 'blur',
            },
          ]"
				>
					<main-input v-model="form.password" placeholder="Password" type="password" />
				</main-form-item>
			</main-form>
			Validate status icons
			<main-form
				:form-value="form"
				is-status-icon
			>
				<main-form-item
					label="Enter ur name"
					prop="name"
					:rules="[
            {
              required: true,
              message: 'Please input ur name',
              trigger: 'blur',
            },
          ]"
				>
					<main-input v-model="form.name" placeholder="Name" />
				</main-form-item>
				<main-form-item
					label="Enter ur password"
					prop="password"
					:rules="[
            {
              required: true,
              message: 'Please input ur passsword',
              trigger: 'blur',
            },
          ]"
				>
					<main-input v-model="form.password" placeholder="Password" type="password" />
				</main-form-item>
			</main-form>
			States
			<main-form
				:form-value="form"
				is-disabled
			>
				<main-form-item
					label="Enter ur name"
					prop="name"
				>
					<main-input v-model="form.name" placeholder="Name" />
				</main-form-item>
				<main-form-item
					label="Enter ur password"
					prop="password"
				>
					<main-input v-model="form.password" placeholder="Password" type="password" />
				</main-form-item>
			</main-form>
			Form with inner form validation
			{{formRecursive}}
			<main-form
				:form-value="formRecursive"
				@submit=""
			>
				<main-form-item
					label="Enter ur name"
					prop="name"
					:rules="[
            {
              required: true,
              message: 'Please input ur name',
              trigger: 'blur',
            },
          ]"
				>
					<main-input v-model="formRecursive.name" placeholder="Name" />
				</main-form-item>
				<main-form-item
					label="Enter ur password"
					prop="password"
					:rules="[
            {
              required: true,
              message: 'Please input ur password',
              trigger: 'blur',
            },
          ]"
				>
					<main-input v-model="formRecursive.password" placeholder="Password" type="password" />
				</main-form-item>
				<main-form
					:form-value="formRecursive.inner"
				>
					<main-form-item
						label="Enter ur name"
						prop="name"
						:rules="[
							{
								required: true,
								message: 'Please input ur name',
								trigger: 'blur',
							},
						]"
					>
						<main-input v-model="formRecursive.inner.name" placeholder="Name" />
					</main-form-item>
					<main-form-item
						label="Enter ur password"
						prop="password"
						:rules="[
							{
								required: true,
								message: 'Please input ur password',
								trigger: 'blur',
							},
						]"
					>
						<main-input v-model="formRecursive.inner.password" placeholder="Password" type="password" />
					</main-form-item>
				</main-form>
				<main-form-item>
					<main-button data-submit>
						submit
					</main-button>
				</main-form-item>
			</main-form>
			U can change label-width
		</div>
		<div class="block block-column">
			Icon
			<main-icon icon="Apple" />
			<main-icon icon="Search" />
			<main-icon icon="Loading" />
		</div>
		<div class="block block-column">
			Input range {{ inputRangeValue }}
			<main-input-range
				v-model="inputRangeValue"
				:step="10"
				:render-bottom-on-active="true"
			>
				<template #top>
					{{ inputRangeValue }}
				</template>
			</main-input-range>
		</div>
		<div class="block block-column">
			Input
			<main-input v-model="inputValue" placeholder="Enter input value" />
			Types
			<main-input v-model="inputValue" type="textarea" placeholder="Textarea" />
			<main-input v-model="inputFileValue" type="file" placeholder="File" />
			<main-input v-model="inputNumberValue" type="number" placeholder="Number" />
			Password params
			<main-input is-show-password v-model="inputValue" type="password" placeholder="Enter password" />
			Sizes
			<main-input size="large" v-model="inputValue" placeholder="Enter input value" />
			<main-input v-model="inputValue" placeholder="Enter input value" />
			<main-input size="small" v-model="inputValue" placeholder="Enter input value" />
			States
			<main-input is-disable v-model="inputValue" placeholder="Disabled" />
			<main-input is-clearable v-model="inputValue" placeholder="Clearable" />
			Icons
			<main-input v-model="inputValue" suffix-icon="Apple" placeholder="Suffix icon" />
			<main-input v-model="inputValue" prefix-icon="Apple" placeholder="Prefix icon" />
			Textarea params
			<main-input autosize v-model="inputValue" type="textarea" placeholder="Enter input value" />
			<main-input :autosize="{ minRows: 2, maxRows: 10 }" v-model="inputValue" type="textarea"
									placeholder="Enter input value" />
			Word limit
			<main-input v-model="inputValue" maxlength="10" placeholder="Max 10" />
			<main-input is-show-word-limit v-model="inputValue" maxlength="10" placeholder="Max 10" />
			U can use formatter & parser <br />
		</div>
		<div class="block block-column">
			Input number
			<main-input-number v-model="inputNumberValue" />
			Sizes
			<main-input-number size="large" v-model="inputNumberValue" />
			<main-input-number v-model="inputNumberValue" />
			<main-input-number size="small" v-model="inputNumberValue" />
			States
			<main-input-number is-disable v-model="inputNumberValue" />
			Limiting
			<main-input-number :min="2" v-model="inputNumberValue" />
			<main-input-number :max="6" v-model="inputNumberValue" />
			<main-input-number :min="2" :max="6" v-model="inputNumberValue" />
			Step
			<main-input-number :step="2" v-model="inputNumberValue" />
			Is step strictly
			<main-input-number is-step-strictly :step="2" v-model="inputNumberValue" />
			Float
			<main-input-number :precision="2" :step="0.2" v-model="inputNumberValue" />
			Control position
			<main-input-number controls-position="right" v-model="inputNumberValue" />
		</div>
		<div class="block block-column">
			Menu
			<div class="block block-column">
				Collapse
				<main-button type="primary" @click="isMenuCollapse = !isMenuCollapse">Toggle</main-button>
			</div>
			<main-menu
				:is-collapse="isMenuCollapse"
			>
				<main-menu-sub index="1">
					<template #title>
						<main-icon icon="Apple" />
						<span>Navigation 1</span>
					</template>
					<main-menu-item index="1-1">
						<main-icon icon="Search" />
						<template #title>
							menu 1
						</template>
					</main-menu-item>
					<main-menu-sub index="1-2">
						<template #title>
							<main-icon icon="Apple" />
							<span>Navigation 2</span>
						</template>
						<main-menu-item index="1-2-1">
							<main-icon icon="Apple" />
							<template #title>
								menu 2
							</template>
						</main-menu-item>
					</main-menu-sub>
					<main-menu-group title="Group 1">
						<template #title>
							<span>Group 1</span>
						</template>
						<main-menu-item index="1-3">
							<main-icon icon="Apple" />
							<template #title>
								menu 3
							</template>
						</main-menu-item>
						<main-menu-item index="1-4">
							<main-icon icon="Apple" />
							<template #title>
								menu 4
							</template>
						</main-menu-item>
					</main-menu-group>
				</main-menu-sub>
				<main-menu-item index="2">
					<main-icon icon="Loading" />
					<template #title>
						menu 5
					</template>
				</main-menu-item>
			</main-menu>
			Default active
			<main-menu default-active="1-2-1">
				<main-menu-sub index="1">
					<template #title>
						<main-icon icon="Apple" />
						<span>Navigation 1</span>
					</template>
					<main-menu-item index="1-1">
						<main-icon icon="Search" />
						<template #title>
							menu 1
						</template>
					</main-menu-item>
					<main-menu-sub index="1-2">
						<template #title>
							<main-icon icon="Apple" />
							<span>Navigation 2</span>
						</template>
						<main-menu-item index="1-2-1">
							<main-icon icon="Apple" />
							<template #title>
								menu 2
							</template>
						</main-menu-item>
					</main-menu-sub>
				</main-menu-sub>
			</main-menu>
			Mode "horizontal" | "vertical"
			<main-menu mode="horizontal">
				<main-menu-item index="1">
					<main-icon icon="Apple" />
					<template #title>
						menu 1
					</template>
				</main-menu-item>
			</main-menu>
			Popover offset
			<main-menu :popperOffset="30" is-collapse>
				<main-menu-sub index="1">
					<template #title>
						<main-icon icon="Apple" />
						<span>Navigation 1</span>
					</template>
					<main-menu-item index="1-1">
						<main-icon icon="Search" />
						<template #title>
							menu 1
						</template>
					</main-menu-item>
					<main-menu-sub index="1-2">
						<template #title>
							<main-icon icon="Apple" />
							<span>Navigation 2</span>
						</template>
						<main-menu-item index="1-2-1">
							<main-icon icon="Apple" />
							<template #title>
								menu 2
							</template>
						</main-menu-item>
					</main-menu-sub>
				</main-menu-sub>
			</main-menu>
			U can change background-color prop & text-color prop & active-text-color
		</div>
		<div class="block block-column">
			Modal
			<div class="block">
				<main-button type="primary" @click="isModalOpen1 = !isModalOpen1">Toggle</main-button>
			</div>
			<main-modal
				v-model="isModalOpen1"
				title="Modal title"
			>
				Modal content
				<template #footer>
					Modal footer
				</template>
			</main-modal>
			U can change width
			<div class="block">
				<main-button type="primary" @click="isModalOpen2 = !isModalOpen2">Toggle</main-button>
			</div>
			<main-modal
				v-model="isModalOpen2"
				title="Modal title"
				width="200px"
			/>
			No show close
			<div class="block">
				<main-button type="primary" @click="isModalOpen3 = !isModalOpen3">Toggle</main-button>
			</div>
			<main-modal
				v-model="isModalOpen3"
				title="Modal title"
				:is-show-close="false"
			/>
			Center content
			<div class="block">
				<main-button type="primary" @click="isModalOpen4 = !isModalOpen4">Toggle</main-button>
			</div>
			<main-modal
				v-model="isModalOpen4"
				title="Modal title"
				is-center
			/>
			Center screen
			<div class="block">
				<main-button type="primary" @click="isModalOpen5 = !isModalOpen5">Toggle</main-button>
			</div>
			<main-modal
				v-model="isModalOpen5"
				title="Modal title"
				is-align-center
			/>
			Lock scroll
			<div class="block">
				<main-button type="primary" @click="isModalOpen6 = !isModalOpen6">Toggle</main-button>
			</div>
			<main-modal
				v-model="isModalOpen6"
				title="Modal title"
				is-lock-scroll
			/>
			U can use callback beforeClose & append to body (isAppendToBody) & make v-if (isDestroyOnClose) etc. (isOverflow,
			isDraggable)
		</div>
		<div class="block block-column">
			Pagination (use layout to control pagination)
			<main-pagination
				layout="prev, pager, next"
				:total="100"
			/>
			Background
			<main-pagination
				layout="prev, pager, next"
				:total="100"
				is-background
			/>
			Sizes
			<main-pagination
				size="large"
				layout="prev, pager, next"
				:total="100"
				is-background
			/>
			<main-pagination
				layout="prev, pager, next"
				:total="100"
				is-background
			/>
			<main-pagination
				size="small"
				layout="prev, pager, next"
				:total="100"
				is-background
			/>
			States
			<main-pagination
				is-disable
				layout="prev, pager, next"
				:total="100"
			/>
			Jumper
			<main-pagination
				layout="prev, pager, next, jumper"
				:total="100"
			/>
			Pages params
			<main-pagination
				layout="prev, pager, next"
				:total="1000"
				:page-size="20"
			/>
			Count of visible items
			<main-pagination
				layout="prev, pager, next"
				:total="1000"
				:pager-count="5"
			/>
			U can hide on single page & listen @current-change ($event - number)
		</div>
		<div class="block block-column">
			Radio
			<main-radio
				v-model="radioValue"
				:radios-data="radioArray"
			/>
			States
			<main-radio
				v-model="radioValue"
				:radios-data="radioArray"
				is-disable
			/>
			<main-radio
				v-model="radioValue"
				:radios-data="radioArray"
				is-border
			/>
			Sizes
			<main-radio
				v-model="radioValue"
				:radios-data="radioArray"
				size="large"
			/>
			<main-radio
				v-model="radioValue"
				:radios-data="radioArray"
			/>
			<main-radio
				v-model="radioValue"
				:radios-data="radioArray"
				size="small"
			/>
			U can change fill & text-color props
		</div>
		<div class="block block-column">
			Select
			<main-select
				v-model="selectValue"
				:select-options="selectOptions"
				placeholder="Select value"
				ref="endpointsSelectRef"
			/>
			Sizes
			<main-select
				v-model="selectValue"
				:select-options="selectOptions"
				placeholder="Select value"
				size="large"
			/>
			<main-select
				v-model="selectValue"
				:select-options="selectOptions"
				placeholder="Select value"
			/>
			<main-select
				v-model="selectValue"
				:select-options="selectOptions"
				placeholder="Select value"
				size="small"
			/>
			States
			<main-select
				v-model="selectValue"
				:select-options="selectOptions"
				placeholder="Select value"
				is-disable
			/>
			Multiple
			<main-select
				v-model="selectMultipleValue"
				:select-options="selectOptions"
				placeholder="Select value"
				is-multiple
			/>
			With multiple, options can convert in tags
			<main-select
				v-model="selectMultipleValue"
				:select-options="selectOptions"
				placeholder="Select value"
				is-multiple
				is-collapse-tags
			/>
			Add tooltip
			<main-select
				v-model="selectMultipleValue"
				:select-options="selectOptions"
				placeholder="Select value"
				is-multiple
				is-collapse-tags
				is-collapse-tags-tooltip
			/>
		</div>
		<div class="block block-column">
			Table
			<main-table
				:table-data="tableData"
				:column-params="tableParams"
			/>
			Selection (u can use emits @select & @select-all)
			<main-table
				:table-data="tableData"
				:column-params="[{ type: 'selection', width: '55' }, ...tableParams]"
			/>
<!--			:selected-rows="tableData.map((d, i) => {-->
<!--			if (i > 0) {-->
<!--			return d-->
<!--			}-->
<!--			}).filter(Boolean)"-->
			Fix position
			<main-table
				:table-data="tableData"
				:column-params="[...tableParams, { type: 'selection', width: '55', fixPosition: 'right' }]"
			/>
			Fix height
			<main-table
				:table-data="tableData"
				height="120"
				:column-params="tableParams"
			/>
			Border
			<main-table
				:table-data="tableData"
				:column-params="tableParams"
				is-border
			/>
			Striped
			<main-table
				:table-data="tableData"
				:column-params="tableParams"
				is-striped
			/>
			Sorting
			<main-table
				:table-data="tableData"
				:column-params="tableSortingParams"
				:default-sort="{
          prop: 'password',
          order: 'descending',
        }"
			/>
			<main-table
				:table-data="tableData"
				:column-params="tableSortingParams"
				:default-sort="{
          prop: 'password',
          order: 'ascending',
        }"
			/>
			Slot to column
			<main-table
				:table-data="tableData"
				:column-params="[...tableParams, { label: 'Actions', width: '55', fixPosition: 'right' }]"
				:default-sort="{
          prop: 'password',
          order: 'ascending',
        }"
			>
				<template #column2>
					<main-button icon="Edit" is-circle is-plain />
				</template>
			</main-table>
			Slot default with main-table-column
			<main-table
				:table-data="tableData"
				:default-sort="{
          prop: 'password',
          order: 'ascending',
        }"
			>
				<main-table-column
					prop="name"
					:width="70"
					is-show-overflow-tooltip
				>
					<template #header>
						Slots header
					</template>
				</main-table-column>
				<main-table-column
					label="Password"
					prop="password"
				/>
				<main-table-column
					label="Actions"
				>
					<div class="block">
						<main-button icon="Edit" is-circle is-plain />
						<main-button icon="Delete" type="danger" is-circle is-plain />
					</div>
				</main-table-column>
			</main-table>
			U can add row-class-name prop (to all row), and u can use slot header
		</div>
		<div class="block block-column">
			Tooltip <br />
			Can use prop content or default slot
			<main-tooltip content="Tooltip">
				<main-button class="tooltip" type="primary">
					Tooltip
				</main-button>
			</main-tooltip>
			<main-tooltip content="Tooltip">
				<main-button class="tooltip" type="primary">
					Tooltip
				</main-button>
			</main-tooltip>
			Theme by prop effect
			<main-tooltip effect="dark" content="Tooltip">
				<main-button class="tooltip" type="primary">
					Tooltip
				</main-button>
			</main-tooltip>
			<main-tooltip effect="light" content="Tooltip">
				<main-button class="tooltip" type="primary">
					Tooltip
				</main-button>
			</main-tooltip>
			Placement (top, left, right, bottom (with -start | -end)
			<main-tooltip content="top" placement="top">
				<main-button class="tooltip" type="primary">
					top
				</main-button>
			</main-tooltip>
			<main-tooltip content="top-start" placement="top-start">
				<main-button class="tooltip" type="primary">
					top-start
				</main-button>
			</main-tooltip>
			<main-tooltip content="top-end" placement="top-end">
				<main-button class="tooltip" type="primary">
					top-end
				</main-button>
			</main-tooltip>
			<main-tooltip content="left" placement="left">
				<main-button class="tooltip" type="primary">
					left
				</main-button>
			</main-tooltip>
			<main-tooltip content="left-start" placement="left-start">
				<main-button class="tooltip" type="primary">
					left-start
				</main-button>
			</main-tooltip>
			<main-tooltip content="left-end" placement="left-end">
				<main-button class="tooltip" type="primary">
					left-end
				</main-button>
			</main-tooltip>
			<main-tooltip content="right" placement="right">
				<main-button class="tooltip" type="primary">
					right
				</main-button>
			</main-tooltip>
			<main-tooltip content="right-start" placement="right-start">
				<main-button class="tooltip" type="primary">
					right-start
				</main-button>
			</main-tooltip>
			<main-tooltip content="right-end" placement="right-end">
				<main-button class="tooltip" type="primary">
					right-end
				</main-button>
			</main-tooltip>
			<main-tooltip content="bottom" placement="bottom">
				<main-button class="tooltip" type="primary">
					bottom
				</main-button>
			</main-tooltip>
			<main-tooltip content="bottom-start" placement="bottom-start">
				<main-button class="tooltip" type="primary">
					bottom-start
				</main-button>
			</main-tooltip>
			<main-tooltip content="bottom-end" placement="bottom-end">
				<main-button class="tooltip" type="primary">
					bottom-end
				</main-button>
			</main-tooltip>
		</div>
		<div class="block block-column">
			<main-title>
				Title h1
			</main-title>
			<main-title tag="h2">
				Title h2
			</main-title>
			<main-title tag="h3">
				Title h3
			</main-title>
			<main-title tag="h4">
				Title h4
			</main-title>
			<main-title tag="h5">
				Title h5
			</main-title>
			<main-title tag="h6">
				Title h6
			</main-title>
		</div>
		<div class="block block-column">
			Autocomplete
			<main-autocomplete
				placeholder="Focus to complete"
				:fetchSuggestions="querySearch"
				v-model="autocompleteValue"
			/>
			No working on focus
			<main-autocomplete
				placeholder="Input to complete"
				:fetchSuggestions="querySearch"
				v-model="autocompleteValue"
				:is-trigger-on-focus="false"
			/>
			Can be clearable
			<main-autocomplete
				placeholder="Input to complete"
				:fetchSuggestions="querySearch"
				v-model="autocompleteValue"
				is-clearable
			/>
			Can customize popover content
			<main-autocomplete
				placeholder="Input to complete"
				:fetchSuggestions="querySearch"
				v-model="autocompleteValue"
				is-clearable
			>
				<template #default="{ item }">
					{{ item.value }} <br />
					<span style="color: gray">{{ item.link }}</span>
				</template>
			</main-autocomplete>
			Can add icon or suffix content
			<main-autocomplete
				placeholder="Input to complete"
				:fetchSuggestions="querySearch"
				v-model="autocompleteValue"
			>
				<template #suffix>
					<main-icon icon="Edit" />
					edit
				</template>
			</main-autocomplete>
			Loading
			<main-autocomplete
				placeholder="Default loading"
				:fetchSuggestions="slowQuerySearch"
				v-model="autocompleteValue"
			/>
			<main-autocomplete
				placeholder="Custom loading"
				:fetchSuggestions="slowQuerySearch"
				v-model="autocompleteValue"
			>
				<template #loading>
					<svg class="circular" viewBox="0 0 50 50">
						<circle class="path" cx="25" cy="25" r="20" fill="none" />
					</svg>
				</template>
			</main-autocomplete>
			U can change popover-class prop to customize popover & u can use @select emit
		</div>
		<div class="block block-column">
			Notification
			<main-button
				@click="NotificationService({
          title: 'Default title',
          message: 'Default message',
        })"
			>
				Default notification
			</main-button>
			Types
			<main-button
				@click="NotificationService({
          type: 'success',
          title: 'Success title',
          message: 'Success message',
        })"
				type="success"
			>
				Success notification
			</main-button>
			<main-button
				@click="NotificationService({
          type: 'warning',
          title: 'Warning title',
          message: 'Warning message',
        })"
				type="warning"
			>
				Warning notification
			</main-button>
			<main-button
				@click="NotificationService({
          type: 'error',
          title: 'Error title',
          message: 'Error message',
        })"
				type="danger"
			>
				Danger notification
			</main-button>
			<main-button
				@click="NotificationService({
          type: 'info',
          title: 'Info title',
          message: 'Info message',
        })"
				type="info"
			>
				Info notification
			</main-button>
			Un closable
			<main-button
				@click="NotificationService({
          title: 'Just autoclose',
          message: 'Just autoclose message',
          showClose: false,
        })"
			>
				Unclose notification
			</main-button>
			Position
			<main-button
				@click="NotificationService({
          title: 'Default title',
          message: 'Default message',
          position: 'top-left'
        })"
			>
				Top left
			</main-button>
			<main-button
				@click="NotificationService({
          title: 'Default title',
          message: 'Default message',
          position: 'top-right'
        })"
			>
				Top right
			</main-button>
			<main-button
				@click="NotificationService({
          title: 'Default title',
          message: 'Default message',
          position: 'bottom-left'
        })"
			>
				Bottom left
			</main-button>
			<main-button
				@click="NotificationService({
          title: 'Default title',
          message: 'Default message',
          position: 'bottom-right'
        })"
			>
				Bottom right
			</main-button>
			Duration
			<main-button
				@click="NotificationService({
          title: 'Duration 7000',
          message: 'Default message',
          duration: 7000,
        })"
			>
				Duration notification
			</main-button>
			U can use onClose, onClick, change zIndex, id, offset, add customClass, html in content (with
			dangerouslyUseHTMLString) and change icon
		</div>
		<div class="block block-column">
			Divider
			<main-divider />
			With content (only horizontal direction). U can change position
			<main-divider>
				<main-icon icon="Apple" />
				Apple
			</main-divider>
			<main-divider content-position="left">
				<main-icon icon="Apple" />
				Apple left
			</main-divider>
			<main-divider content-position="right">
				<main-icon icon="Apple" />
				Apple right
			</main-divider>
			<main-divider content-position="center">
				<main-icon icon="Apple" />
				Apple center
			</main-divider>
			Direction
			<div class="block">
				<main-divider direction="vertical" />
				a
				<main-divider direction="vertical" />
				b
				<main-divider direction="vertical" />
				c
				<main-divider direction="vertical" />
			</div>
		</div>
		<div class="block block-column">
			Message (can use html in message)
			<main-button
				@click="MessageService({
          message: 'Default message',
        })"
			>
				Default message
			</main-button>
			Types
			<main-button
				type="success"
				@click="MessageService({
          message: 'Success message',
          type: 'success'
        })"
			>
				Success message
			</main-button>
			<main-button
				type="warning"
				@click="MessageService({
          message: 'Warning message',
          type: 'warning'
        })"
			>
				Warning message
			</main-button>
			<main-button
				type="danger"
				@click="MessageService({
          message: 'Error message',
          type: 'error'
        })"
			>
				Error message
			</main-button>
			<main-button
				type="info"
				@click="MessageService({
          message: 'Info message',
          type: 'info'
        })"
			>
				Info message
			</main-button>
			States
			<main-button
				is-plain
				@click="MessageService({
          message: 'Plain message',
          plain: true
        })"
			>
				Plain message
			</main-button>
			Show close
			<main-button
				@click="MessageService({
          message: 'Plain message',
          showClose: true
        })"
			>
				Plain message
			</main-button>
			Center content
			<main-button
				@click="MessageService({
          message: 'Center message',
          center: true
        })"
			>
				Center message
			</main-button>
			Grouping
			<main-button
				@click="MessageService({
          message: 'Grouped message',
          grouping: true,
        })"
			>
				Grouped message
			</main-button>
			<main-button
				@click="MessageService({
          message: 'Grouped message',
          grouping: true,
          repeatNum: 5,
        })"
			>
				Grouped message by 5
			</main-button>
			Change icon
			<main-button
				@click="MessageService({
          message: 'Custom icon message',
          icon: 'Edit',
        })"
			>
				Custom icon message
			</main-button>
			Duration
			<main-button
				@click="MessageService({
          message: 'Duration 10000 message',
          duration: 10000,
        })"
			>
				Duration 10000 message
			</main-button>
			U can change custom class, offset, appendTo, id, zIndex
		</div>
		<div class="block block-column">
			Skeleton loading
			<main-skeleton>
				Content
			</main-skeleton>
			Animated
			<main-skeleton is-animated>
				Content
			</main-skeleton>
			Custom rows quantity
			<main-skeleton is-animated :rows="7">
				Content
			</main-skeleton>
			U can use slots to customize skeleton (variants item: "text" | "button" | "circle" | "caption" | "image" | "rect"
			| "h1" | "h3" | "p")
			<main-skeleton is-animated>
				Content
				<template #template>
					<main-skeleton-item variant="button" />
					<main-skeleton-item variant="circle" />
					<main-skeleton-item variant="caption" />
					<main-skeleton-item variant="image" style="width: 240px; height: 240px" />
					<main-skeleton-item variant="rect" />
					<main-skeleton-item variant="p" />
					<div class="block">
						<main-skeleton-item variant="h1" />
						<main-skeleton-item variant="h3" />
						<main-skeleton-item variant="text" />
					</div>
				</template>
			</main-skeleton>
			U can use throttle prop to set timeout after loading, to make visible complete content, use slot #default
		</div>
		<div class="block block-column">
			Loading
			<main-table
				v-loading="true"
				:table-data="tableData"
				:column-params="tableParams"
				style="border: 1px solid black"
			/>
			Customize by props: element-loading-text, element-loading-spinner, element-loading-svg-view-box,
			element-loading-background
			<main-table
				v-loading="true"
				element-loading-text="Loading..."
				:element-loading-spinner="loadingSvg"
				element-loading-svg-view-box="-10, -10, 50, 50"
				element-loading-background="rgba(122, 122, 122, 0.8)"
				:table-data="tableData"
				:column-params="tableParams"
			/>
			Lock fullscreen
			<main-button
				v-loading.fullscreen.lock="fullscreenLoading"
				@click="openFullScreen"
			>
				Full screen
			</main-button>
			U can use LoadingService
		</div>
		<div class="block block-column">
			Progress
			<main-progress
				:percentage="55"
			/>
			Custom info by format prop
			<main-progress
				:percentage="55"
				:format="(percentage: number) => `${percentage}$`"
			/>
			Text inside
			<main-progress
				:percentage="55"
				is-text-inside
			/>
			Statuses
			<main-progress
				:percentage="55"
				status="success"
			/>
			<main-progress
				:percentage="55"
				status="exception"
			/>
			<main-progress
				:percentage="55"
				status="warning"
			/>
			Types
			<main-progress
				:percentage="55"
				type="circle"
			/>
			<main-progress
				:percentage="55"
				type="line"
			/>
			<main-progress
				:percentage="55"
				type="dashboard"
			/>
			Types & status
			<main-progress
				:percentage="55"
				type="dashboard"
				status="success"
			/>
			<main-progress
				:percentage="55"
				type="dashboard"
				status="warning"
			/>
			<main-progress
				:percentage="55"
				type="dashboard"
				status="exception"
			/>
			Stroke width
			<main-progress
				:percentage="55"
				type="circle"
				:stroke-width="10"
			/>
			<main-progress
				:percentage="55"
				:stroke-width="12"
				type="line"
			/>
			<main-progress
				:percentage="55"
				:stroke-width="10"
				type="dashboard"
			/>
			Striped
			<main-progress
				:percentage="55"
				:stroke-width="10"
				is-striped
			/>
			<main-progress
				:percentage="55"
				:stroke-width="10"
				is-striped
				is-striped-flow
			/>
			Striped animation
			<main-progress
				:percentage="55"
				:stroke-width="10"
				is-striped
				is-striped-flow
				is-indeterminate
			/>
			Striped animation duration
			<main-progress
				:percentage="55"
				:stroke-width="10"
				is-striped
				is-striped-flow
				is-indeterminate
				:duration="10"
			/>
			U can customize statistic with slot default & customize color (prop)
		</div>
		<div class="block block-column">
			Steps
			<div class="block">
				<main-button @click="stepActive > 0 ? stepActive-- : null"><<<</main-button>
				<main-button @click="stepActive < 3 ? stepActive++ : null">>>></main-button>
			</div>
			<main-steps
				:active-index="stepActive"
			>
				<main-steps-item title="First step" />
				<main-steps-item title="Second step" />
				<main-steps-item title="Third step" />
			</main-steps>
			Finish status
			<main-steps
				:active-index="stepActive"
				finish-status="wait"
			>
				<main-steps-item title="First step" />
				<main-steps-item title="Second step" />
				<main-steps-item title="Third step" />
			</main-steps>
			<main-steps
				:active-index="stepActive"
				finish-status="error"
			>
				<main-steps-item title="First step" />
				<main-steps-item title="Second step" />
				<main-steps-item title="Third step" />
			</main-steps>
			<main-steps
				:active-index="stepActive"
				finish-status="process"
			>
				<main-steps-item title="First step" />
				<main-steps-item title="Second step" />
				<main-steps-item title="Third step" />
			</main-steps>
			<main-steps
				:active-index="stepActive"
				finish-status="finish"
			>
				<main-steps-item title="First step" />
				<main-steps-item title="Second step" />
				<main-steps-item title="Third step" />
			</main-steps>
			<main-steps
				:active-index="stepActive"
				finish-status="success"
			>
				<main-steps-item title="First step" />
				<main-steps-item title="Second step" />
				<main-steps-item title="Third step" />
			</main-steps>
			Description
			<main-steps
				:active-index="stepActive"
			>
				<main-steps-item title="First step" description="Description" />
				<main-steps-item title="Second step" description="Description" />
				<main-steps-item title="Third step" description="Description" />
			</main-steps>
			Icon
			<main-steps
				:active-index="stepActive"
			>
				<main-steps-item title="First step" icon="Apple" />
				<main-steps-item title="Second step" icon="Apple" />
				<main-steps-item title="Third step" icon="Apple" />
			</main-steps>
			Center
			<main-steps
				:active-index="stepActive"
				is-align-center
			>
				<main-steps-item title="First step" />
				<main-steps-item title="Second step" />
				<main-steps-item title="Third step" />
			</main-steps>
			Simple
			<main-steps
				:active-index="stepActive"
				is-simple
			>
				<main-steps-item title="1" />
				<main-steps-item title="2" />
				<main-steps-item title="3" />
			</main-steps>
			Direction
			<main-steps
				:active-index="stepActive"
				direction="vertical"
			>
				<main-steps-item title="First step" />
				<main-steps-item title="Second step" />
				<main-steps-item title="Third step" />
			</main-steps>
			U can change every status once, customize space
		</div>
		<div class="block block-column">
			Statistic
			<div class="block">
				<main-statistic title="Daily active users" :value="statisticValue" />
				<main-statistic title="Daily active users" :value="statisticValue" />
			</div>
			Customize with slots
			<div class="block">
				<main-statistic
					:value="statisticValue"
				>
					<template #title>
						Apple value
						<main-icon icon="Apple" :size="10" />
					</template>
					<template #suffix>
						Apples |
						<main-icon icon="Apple" />
					</template>
				</main-statistic>
				<main-statistic
					:value="statisticValue"
				>
					<template #title>
						Mail value
						<main-icon icon="Male" :size="10" />
					</template>
					<template #suffix>
						<main-icon icon="Male" />
					</template>
				</main-statistic>
			</div>
			Countdown
			<main-countdown
				title="Countdown timer"
				:value="Date.now() + 1000 * 60 * 60 * 7"
			/>
			Format (example HH:mm:ss [till end])
			<main-countdown
				title="Countdown timer"
				:value="Date.now() + 1000 * 60 * 60 * 7"
				format="ss [Seconds]"
			/>
		</div>
		<div class="block block-column">
			Tour
			<div class="block">
				<main-button ref="ref1">Upload</main-button>
				<main-button ref="ref2">Save</main-button>
				<main-button ref="ref3" icon="MoreFilled" />
			</div>
			<main-divider />
			<main-button @click="isTourOpen = true">
				Begin tour
			</main-button>
			<main-tour
				v-model="isTourOpen"
				:steps="[
          {
            title: 'Upload File',
            target: ref1?.$el,
          },
          {
            title: 'Save',
            description: 'Save your changes',
            target: ref2?.$el,
          },
          {
            title: 'Other Actions',
            description: 'Click to see other',
            target: ref3?.$el,
          },
        ]"
			>
				<template #step0>
					<img
						style="width: 240px"
						src="https://element-plus.org/images/element-plus-logo.svg"
						alt="tour.png"
					/>
					<div>Put you files here.</div>
				</template>
			</main-tour>
			Without tour
			<main-button @click="isTourOpen1 = true">
				Begin tour without mask
			</main-button>
			<main-tour
				:is-mask="false"
				v-model="isTourOpen1"
				:steps="[
          {
            title: 'Upload File',
            target: ref1?.$el,
          },
          {
            title: 'Save',
            description: 'Save your changes',
            target: ref2?.$el,
          },
          {
            title: 'Other Actions',
            description: 'Click to see other',
            target: ref3?.$el,
          },
        ]"
			>
				<template #step0>
					<img
						style="width: 240px"
						src="https://element-plus.org/images/element-plus-logo.svg"
						alt="tour.png"
					/>
					<div>Put you files here.</div>
				</template>
			</main-tour>
			Placement
			<main-button ref="btnRef" @click="isTourOpen2 = true">
				Begin tour without first refs
			</main-button>
			<main-tour
				v-model="isTourOpen2"
				:steps="[
          {
            title: 'Center',
            description: 'Displayed in the center of screen.'
          },
          {
            title: 'Right',
            description: 'On the right of target.',
            placement: 'right',
            target: btnRef?.$el,
          },
          {
            title: 'Top',
            description: 'On the top of target.',
            placement: 'top',
            target: btnRef?.$el,
          },
        ]"
			/>
			Types
			<main-button @click="isTourOpen3 = true">
				Begin primary tour
			</main-button>
			<main-tour
				v-model="isTourOpen3"
				type="primary"
				:steps="[
          {
            title: 'Center',
            description: 'Displayed in the center of screen.'
          },
          {
            title: 'Right',
            description: 'On the right of target.',
            placement: 'right',
            target: btnRef?.$el,
          },
          {
            title: 'Top',
            description: 'On the top of target.',
            placement: 'top',
            target: btnRef?.$el,
          },
        ]"
			/>
			U can change indicators by slot #indicators="{ current, total }"
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { MainAlert } from "@/components/alert";
import { MainBreadcrumbs } from "@/components/breadcrumbs";
import { MainButton } from "@/components/button";
import { MainCheckbox, MainCheckboxGroup } from "@/components/checkbox";
import { MainCollapse } from "@/components/collapse";
import { DateTypeEnum, MainDatePicker } from "@/components/date-picker";
import { MainEmpty } from "@/components/empty";
import { MainForm, MainFormItem } from "@/components/form";
import { MainInput, MainInputNumber, MainAutocomplete, MainInputRange } from "@/components/input";
import { MainIcon } from "@/components/icon";
import { MainMenu, MainMenuGroup, MainMenuItem, MainMenuSub } from "@/components/menu";
import { MainModal } from "@/components/modal";
import { MainPagination } from "@/components/pagination";
import { MainRadio } from "@/components/radio";
import { MainSelect, TimeSelect } from "@/components/select";
import { MainTable, MainTableColumn } from "@/components/table";
import { MainTooltip } from "@/components/tooltip";
import { MainTitle } from "@/components/title";
import { NotificationService } from "@/services";
import { MessageService } from "@/services";
// import { LoadingService } from "@/services";
import { MainDivider } from "@/components/divider";
import { MainSkeleton, MainSkeletonItem } from "@/components/skeleton";
import { MainProgress } from "@/components/progress";
import { MainSteps, MainStepsItem } from "@/components/step";
import { MainCountdown, MainStatistic } from "@/components/statistic";
import { useTransition } from "@vueuse/core";
import { MainTour } from "@/components/tour";
import { ButtonInstance } from "element-plus";
import { MainTag } from "@/components/tag";
import { MainTabs } from "@/components/tab";

const timeSelectModelValue = ref<string>("00:45");

const tabs = reactive<({
	label: string,
	name: string,
})[]>([
	{
		label: "User",
		name: "1"
	},
	{
		label: "User1",
		name: "2"
	},
	{
		label: "User2",
		name: "3"
	},
	{
		label: "User3",
		name: "4"
	}
]);
const tabController = ref<string>("0");

const btnRef = ref<ButtonInstance>();
const ref1 = ref<ButtonInstance>();
const ref2 = ref<ButtonInstance>();
const ref3 = ref<ButtonInstance>();

const isTourOpen = ref(false);
const isTourOpen1 = ref(false);
const isTourOpen2 = ref(false);
const isTourOpen3 = ref(false);

const source = ref(0);
const statisticValue = useTransition(source, {
	duration: 1500
});
source.value = 172000;


const stepActive = ref(1);

const fullscreenLoading = ref(false);
const openFullScreen = () => {
	fullscreenLoading.value = true;
	setTimeout(() => {
		fullscreenLoading.value = false;
	}, 2000);
};

const loadingSvg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>`;

const querySearch = (queryString: string, callback: any) => {
	const results = queryString ?
		completeData.value.filter(createFilter(queryString)) :
		completeData.value;

	callback(results);
};
const slowQuerySearch = (queryString: string, callback: any) => {
	const results = queryString ?
		completeData.value.filter(createFilter(queryString)) :
		completeData.value;

	setTimeout(() => callback(results), 2000);
};
const createFilter = (queryString: string) => {
	return (data: { value: string, link: string }) => {
		return (
			data.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
		);
	};
};
const completeData = ref([
	{ value: "vue", link: "https://github.com/vuejs/vue" },
	{ value: "element", link: "https://github.com/ElemeFE/element" },
	{ value: "cooking", link: "https://github.com/ElemeFE/cooking" },
	{ value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
	{ value: "vuex", link: "https://github.com/vuejs/vuex" },
	{ value: "vue-router", link: "https://github.com/vuejs/vue-router" },
	{ value: "babel", link: "https://github.com/babel/babel" }
]);
const autocompleteValue = ref("");

const tableSortingParams = reactive([
	{
		label: "User name",
		prop: "name",
		width: 100,
		isShowOverflowTooltip: true
	},
	{
		isSortable: true,
		label: "User password",
		prop: "password"
	}
]);
const tableParams = reactive([
	{
		label: "User name",
		prop: "name",
		width: 100,
		isShowOverflowTooltip: true
	},
	{
		label: "User password",
		prop: "password"
	}
]);
const tableData = reactive([
	{
		name: "Name 1",
		password: "BPassword 1"
	},
	{
		name: "Name 2",
		password: "BZPassword 2"
	},
	{
		name: "Name 3",
		password: "APassword 3"
	}
]);

const selectValue = ref("");
const selectMultipleValue = ref([]);
const selectOptions = reactive([
	{
		label: "Option 1",
		value: "Option 1"
	},
	{
		label: "Option 2",
		value: "Option 2"
	},
	{
		label: "Option 3",
		value: "Option 3"
	}
]);

const radioValue = ref("3");
const radioArray = reactive([
	{
		label: "Radio 1",
		value: "1"
	},
	{
		label: "Radio 2",
		value: "2",
		isBorder: true
	},
	{
		label: "Radio 3",
		value: "3",
		isDisabled: true
	},
	{
		label: "Radio 4",
		value: "4"
	}
]);

const isModalOpen1 = ref(false);
const isModalOpen2 = ref(false);
const isModalOpen3 = ref(false);
const isModalOpen4 = ref(false);
const isModalOpen5 = ref(false);
const isModalOpen6 = ref(false);

const isMenuCollapse = ref(true);

const inputValue = ref("");
const inputRangeValue = ref(1);
const inputFileValue = ref(null);
const inputNumberValue = ref(2);

const form = reactive({
	name: "",
	password: ""
});

const formRecursive = reactive({
	name: "",
	password: "",
	inner: {
		name: "",
		password: ""
	}
});

const dateValue = ref("");
const year = ref("");
const month = ref("");
const dates = ref("");
const datetime = ref("");
const week = ref("");
const datetimerange = ref("");
const daterange = ref("");
const monthrange = ref("");
const dateValueFormat = ref("");

const collapseValue = ref([1]);
const collapseArray = reactive([
	{
		title: "collapse title 1",
		name: 1,
		text: "collapse text 1 collapse text 1 collapse text 1 collapse text 1 collapse text 1 collapse text 1"
	},
	{
		title: "collapse title 2",
		name: 2,
		text: "collapse text 2 collapse text 2 collapse text 2 collapse text 2 collapse text 2 collapse text 2"
	},
	{
		title: "collapse title 3",
		name: 3
	}
]);

const checkboxValueByArray = ref([1]);
const checkboxArray = reactive([
	{
		label: "Checkbox 1",
		value: 1
	},
	{
		label: "Checkbox 2",
		value: 2
	},
	{
		label: "Checkbox 3",
		value: 3,
		isBorder: true
	},
	{
		label: "Checkbox 4",
		value: 4,
		isDisabled: true
	}
]);

const checkboxValue = ref(false);

const routeHistory = [
	{
		path: "/",
		title: "home"
	},
	{
		path: "/1",
		title: "home1"
	},
	{
		title: "home2"
	},
	{
		title: "home3"
	}
];
</script>

<style scoped lang="scss">
.ui-kit {
	display: grid;
	gap: 40px;
	padding: 20px 20px 120px;
	grid-template-columns: repeat(3, 1fr);
}

:global(.block-column .el-button+.el-button) {
	margin-left: 0;
}

.block {
	display: flex;
	gap: 10px;

	&-column {
		flex-direction: column;
	}

	&-full {
		width: 100%;
	}
}

.text {
	display: inline-flex;

	&-align {
		align-items: center;
		gap: 0.25rem;
	}
}

.tooltip {
	width: fit-content;
	min-width: 100px;
	min-height: 100px;
}

.circular {
	display: inline;
	height: 30px;
	width: 30px;
	animation: loading-rotate 2s linear infinite;
}

.path {
	animation: loading-dash 1.5s ease-in-out infinite;
	stroke-dasharray: 90, 150;
	stroke-dashoffset: 0;
	stroke-width: 2;
	stroke: var(--el-color-primary);
	stroke-linecap: round;
}

.loading-path .dot1 {
	transform: translate(3.75px, 3.75px);
	fill: var(--el-color-primary);
	animation: custom-spin-move 1s infinite linear alternate;
	opacity: 0.3;
}

.loading-path .dot2 {
	transform: translate(calc(100% - 3.75px), 3.75px);
	fill: var(--el-color-primary);
	animation: custom-spin-move 1s infinite linear alternate;
	opacity: 0.3;
	animation-delay: 0.4s;
}

.loading-path .dot3 {
	transform: translate(3.75px, calc(100% - 3.75px));
	fill: var(--el-color-primary);
	animation: custom-spin-move 1s infinite linear alternate;
	opacity: 0.3;
	animation-delay: 1.2s;
}

.loading-path .dot4 {
	transform: translate(calc(100% - 3.75px), calc(100% - 3.75px));
	fill: var(--el-color-primary);
	animation: custom-spin-move 1s infinite linear alternate;
	opacity: 0.3;
	animation-delay: 0.8s;
}

@keyframes loading-rotate {
	to {
		transform: rotate(360deg);
	}
}

@keyframes loading-dash {
	0% {
		stroke-dasharray: 1, 200;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: 90, 150;
		stroke-dashoffset: -40px;
	}
	100% {
		stroke-dasharray: 90, 150;
		stroke-dashoffset: -120px;
	}
}

@keyframes custom-spin-move {
	to {
		opacity: 1;
	}
}
</style>
