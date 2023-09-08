define(["require", "exports"], function (require, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.autocompletes = {

		Field: {
			'AccountAge': {
				label: {
					name: 'AccountAge',
					type: '(number)',
				},
			},
            'AutoJumpEnabled': {
				label: {
					name: 'AutoJumpEnabled',
					type: '(boolean)',
				},
			},
            'CameraMaxZoomDistance': {
				label: {
					name: 'CameraMaxZoomDistance',
					type: '(number)',
				},
			},'CameraMinZoomDistance': {
				label: {
					name: 'CameraMinZoomDistance',
					type: '(number)',
				},
			},'CameraMode': {
				label: {
					name: 'CameraMode',
					type: '(Enum.CameraMode)',
				},
			},'CanLoadCharacterAppearance': {
				label: {
					name: 'CanLoadCharacterAppearance',
					type: '(boolean)',
				},
			},'Character': {
				label: {
					name: 'Character',
					type: '(Model)',
				},
                "__using__": ["extra/Character"]
			},'CharacterAppearanceId': {
				label: {
					name: 'CharacterAppearanceId',
					type: '(number)',
				},
			},'DevCameraOcclusionMode': {
				label: {
					name: 'DevCameraOcclusionMode',
					type: '(Enum.DevCameraOcclusionMode)',
				},
			},'DevComputerCameraMode': {
				label: {
					name: 'DevComputerCameraMode',
					type: '(Enum.DevComputerCameraMode)',
				},
			},'DevComputerMovementMode': {
				label: {
					name: 'DevComputerMovementMode',
					type: '(Enum.DevComputerMovementMode)',
				},
			},'DevEnableMouseLock': {
				label: {
					name: 'DevEnableMouseLock',
					type: '(boolean)',
				},
			},'DevTouchCameraMode': {
				label: {
					name: 'DevTouchCameraMode',
					type: '(Enum.DevTouchCameraMode)',
				},
			},'DevTouchMovementMode': {
				label: {
					name: 'DevTouchMovementMode',
					type: '(Enum.DevTouchMovementMode)',
				},
			},'DisplayName': {
				label: {
					name: 'DisplayName',
					type: '(string)',
				},
			},'FollowUserId': {
				label: {
					name: 'FollowUserId',
					type: '(number)',
				},
			},'GameplayPaused': {
				label: {
					name: 'GameplayPaused',
					type: '(boolean)',
				},
			},'HasVerifiedBadge': {
				label: {
					name: 'HasVerifiedBadge',
					type: '(boolean)',
				},
			},'HealthDisplayDistance': {
				label: {
					name: 'HealthDisplayDistance',
					type: '(number)',
				},
			},'LocaleId': {
				label: {
					name: 'LocaleId',
					type: '(string)',
				},
			},'MembershipType': {
				label: {
					name: 'MembershipType',
					type: '(Enum.MembershipType)',
				},
			},'NameDisplayDistance': {
				label: {
					name: 'NameDisplayDistance',
					type: '(number)',
				},
			},'Neutral': {
				label: {
					name: 'Neutral',
					type: '(boolean)',
				},
			},'ReplicationFocus': {
				label: {
					name: 'ReplicationFocus',
					type: '(Instance)',
				},
                "__using__": ['classes/Instance']
			},'RespawnLocation': {
				label: {
					name: 'RespawnLocation',
					type: '(SpawnLocation)',
				},
                "__using__": ['classes/BasePart']
			},'Team': {
				label: {
					name: 'Team',
					type: '(Team)',
				},
                "__using__": ['classes/Team']
			},'AutoJumpEnabled': {
				label: {
					name: 'AutoJumpEnabled',
					type: '(boolean)',
				},
			},
		},

		Class: {
			// TODO: Add autocompletes

			'Terrain': {
				label: {
					name: 'Terrain',
					type: '(Instance)',
				},
				documentation: {
					value: [
						'A reference to the `Terrain` object parented to the Workspace.',
						'',
						'* Tags: ReadOnly, NotScriptable',
						'',
						'[View documentation](https://developer.roblox.com/en-us/api-reference/property/Workspace/Terrain)',
					].join('\n')
				}
			},

		},

		Method: {

			'BreakJoints': {
				insertText: 'BreakJoints()',
				documentation: {
					value: [
						'```lua', 'function BreakJoints(objects: Array<BaseParts>?)', '```',
						'',
						'Goes through all BaseParts given, breaking any joints connected to these parts.',
						'If `objects` is not provided, breaks connections between descending BaseParts, ',
						'including surface connections with any adjacent parts, WeldConstraints and all ',
						'Welds and other JointInstances.',
						'',
						'[View documents](https://developer.roblox.com/en-us/api-reference/function/Workspace/BreakJoints)',
					].join('\n')
				},
			},

		__requires__: [['classes/Model']],
        }
	};
});